---
layout: default
---

<div class="container container--default pt-8 lg:py-24">
  <article class="space-y-8 lg:space-y-16">
    <div class="lg:flex lg:mt-8 space-y-16 lg:space-y-0 lg:space-x-8 xl:space-x-16">
      <section class="lg:w-3/5 xl:w-2/3">
        <h1 class="head-alt-md md:head-alt-lg max-w-5xl mb-8">{{ page.title }}</h1>
        <div class="content-block w-full lg:mt-8">
          {{ content }}
        </div>
      </section>
      <section class="lg:w-2/5 xl:w-1/3 lg:pt-0">
        <div class="lg:card lg:elevation-10">
          <div class="lg:card__body content-block">
            <h2>Základní údaje</h2>
            <div class="space-y-4">
              {% include contacts/summary-table.html %}
    		      <p>Každý člen strany má email ve tvaru: <tt>jmeno.prijmeni@pirati.cz</tt></p>
            </div>
          </div>
        </div>
      </section>
    </div>
    {% include social.html %}
  </article>
</div>
