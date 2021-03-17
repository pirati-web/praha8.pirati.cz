require 'twitter_cldr'

module Jekyll

  class AuthorPageGenerator < Jekyll::Generator
    safe true

    def generate(site)
      # Fetch the author names { id => name }
      people = site.collections['people'].docs.collect { |person| [ person.data['uid'], person.data['name'] ] }.to_h
      authors_all = {}
      site.posts.docs.reverse.each do |post|
        if post.data.key? 'authorId' and post.data["authorId"]
          uid = post.data["authorId"]
          if people.key? uid
            post.data["category"] = uid
            if not authors_all.key? uid
              authors_all[uid] = []
            end
            authors_all[uid].push post
          end
        end
      end
      collator = TwitterCldr::Collation::Collator.new(:cs)
      authors = collator.sort(authors_all.keys).collect { |uid|
        [ uid, {'size' => authors_all[uid].count(), 'name' => people[uid] }]
      }.to_h
      authors_all.each do |uid, posts|
        site.pages << AuthorPage.new(site, authors, uid, posts)
      end
    end
  end

  # Subclass of `Jekyll::Page` with custom method definitions.
  class AuthorPage < Jekyll::Page
    def initialize(site, authors, author, posts)
      author_slug = Utils.slugify(author, :mode => "latin")
      @site = site
      @base = site.source
      @path = 'authors'
      @basename = author_slug
      @ext      = ''

      @data = {
        'authors' => authors,
        'author' => author,
        'posts' => posts,
        'layout' => 'authors',
        'permalink' => '/aktuality/autori/' + author_slug + '/',
        'pagination' => {
          'enabled' => true,
          'permalink' => '/:num/',
          'category' => author,
        }
      }
    end
  end
end
