---
layout: default
---

<div class="container container--default pt-8 lg:py-24">
  <div class="content-block w-full lg:mt-8">
    {{ content }}
  </div>
  <article class="space-y-8 lg:space-y-16">
    <div class="lg:flex lg:mt-8 space-y-16 lg:space-y-0 lg:space-x-8 xl:space-x-16">
      <section class="lg:w-3/5 xl:w-2/3">
        <h1 class="head-alt-md md:head-alt-lg max-w-5xl mb-8">{{ page.title }}</h1>
        {% assign team = site.data.teams.contact %}
        {% if team.members.size > 0 %}
        <div class="space-y-8">
          {% for member in team.members %}
            {% unless member.first %}
              {% assign person=site.people | where: "uid", member | first %}
            {% elsif member.uid %}
              {% assign person=site.people | where: "uid", member.uid | first %}
            {% else %}
              {% assign person=member %}
            {% endunless %}
            <div>
              <h2 class="head-heavy-sm mb-2 lg:mb-4">{{ member.description }}</h2>
              <div class="card elevation-3">
                <div class="card__body">
                  {% include people/profile-badge.html item=person %}
                </div>
              </div>
            </div>
          {% endfor %}
        </div>
        {% endif %}
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

