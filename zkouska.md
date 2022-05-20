---
layout: default
---

<article class="hero hero--image " style="--image-url: url("/assets/img/hero-home-pozadi.jpg")>
  <div class="container grid lg:grid-rows-4 lg:grid-cols-7 gap-2 items-center">
    <div class="lg:row-span-4 lg:col-span-3 order-1">
      <h1 class="head-alt-md md:head-alt-xl">Jsme Piráti <br />z Prahy 8! Máme odvahu dělat věci správně!</h1>
    </div>
    <div class="lg:row-span-1 lg:col-span-3 order-3">
      <div class="mt-4 md:mt-8 space-y-4">
        <button class="btn btn--white btn--fullwidth md:btn--autowidth text-lg">
          <div class="btn__body "><a href="/program/">Plníme náš program pro Prahu 8</a></div>
        </button>

        <button class="btn btn--white btn--fullwidth md:btn--autowidth text-lg">
          <div class="btn__body "><a href="/lide/">Seznamte se s námi!</a></div>
        </button>

      </div>
    </div>
    <div class="lg:row-span-5 lg:col-span-4 order-2">
      <img src="/assets/img/hero-home-praha8.png" />
    </div>
  </div>
</article>

<div class="container container--default pt-4 lg:pb-24">
  <br />
  {% include homepage/news.html title="Aktuality z osmičky" %}
  {% include homepage/calendar.html %}
  {% include homepage/social.html %}
  {% include homepage/countdown.html deadline="2022-09-23 14:00:00" %}
</div>