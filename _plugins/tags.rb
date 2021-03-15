module Jekyll

  class TagPageGenerator < Jekyll::Generator
    safe true

    def generate(site)
      site.tags.each do |tag, posts|
        site.pages << TagPage.new(site, tag, posts)
      end
    end
  end

  # Subclass of `Jekyll::Page` with custom method definitions.
  class TagPage < Jekyll::Page
    def initialize(site, tag, posts)
      tag_slug = Utils.slugify(tag, :mode => "latin")
      @site = site
      @base = site.source
      @path = 'tags'
      @basename = tag_slug
      @ext      = ''

      @data = {
        'tag' => tag,
        'layout' => 'tags',
        'permalink' => '/aktuality/stitky/' + tag_slug +  '/',
        'pagination' => {
          'enabled' => true,
          'permalink' => '/:num/',
          'tag' => tag,
        }
      }
    end
  end
end
