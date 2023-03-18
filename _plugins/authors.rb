require 'twitter_cldr'

module Jekyll

  class AuthorPageGenerator < Jekyll::Generator

    def generate(site)
      site.data['authors'].each do |author, data|
        site.pages << AuthorPage.new(site, author, data)
      end
    end
  end

  class AuthorPage < Jekyll::Page
    def initialize(site, author, data)
      @site = site
      @base = site.source
      @dir = '/authors/'
      @basename = Utils.slugify(author, :mode => "latin")
      @ext = '.html'
      @name = @basename + @ext
      @path = site.in_source_dir(@base, @dir, @name)
      @data = {
        'author' => author,
        'posts' => data['posts'],
        'layout' => 'authors',
        'permalink' => data['link'],
        'pagination' => {
          'enabled' => true,
          'permalink' => '/:num/',
        }
      }
    end
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  # Create a hash for people collection { uid => name  }
  userId2Name = site.collections['people'].docs.collect { |p| [p.data['uid'], p.data['name']] }.compact.to_h

  # Create a hash for people collection { name => person }
  author2Person = site.collections['people'].docs.collect { |p| [p.data['name'], p.url] }.compact.to_h

  # Create hash { authorName => posts }
  postsByAuthor = Hash.new { |h, key| h[key] = [] }
  site.posts.docs.each do |post|
    if authorId = post.data['authorId']
      post.data['author'] = userId2Name[authorId]
    end
    if authorName = post.data['author']
      postsByAuthor[authorName] << post
    end
  end

  # Sort the authors by name and store them in site.data if have posts
  collator = TwitterCldr::Collation::Collator.new(:cs)
  site.data['authors'] = collator.sort(postsByAuthor.keys).collect { |authorName| [authorName, {
    'name' => authorName, # for feed plugin :(
    'link' => '/aktuality/autori/' + Jekyll::Utils.slugify(authorName, :mode => "latin") + '/',
    'plink' => author2Person[authorName],
    'posts' => postsByAuthor[authorName].sort.reverse
  } ] }.to_h
end
