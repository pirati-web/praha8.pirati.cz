---
title: "Nakopneme bydlení! A jaké máte přání vy?"
author: Jan Borovička
image: posts/2025-06-28-mate-prani/mateprani6.jpg
tags: [Piráti, Volby 2025]
fancybox:
  - name: Jaké to bylo v Kobylisích? Mrkněte na fotky.
    img:
      - { src: posts/2025-06-28-mate-prani/mateprani1.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani2.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani3.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani4.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani5.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani6.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani7.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani8.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani9.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani10.jpg, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani12.png, title: Máte přání?}
      - { src: posts/2025-06-28-mate-prani/mateprani13.png, title: Máte přání?}
---

**Nakopneme bydlení v Česku! V Kobylisích u metra jsme Vám tento týden představili naše plány na dostupné bydlení, boj proti korupci a také se zeptali na vaše přání! Připojili se k nám i předseda Pirátů Zdeněk Hřib a místopředsedkyně Sněmovny Olga Richterová.**

Naše priority a program najdete na webu www.nakopnemeto.cz

### A jaké je vaše přání? Dejte nám vědět [v komentářích na sítích](https://www.facebook.com/share/p/1C8TJcLDPv/?mibextid=wwXIfr)!


{% for galery in page.fancybox %}
<div class="mt-4">
  <h3>{{ galery.name }}</h3>
  <div class="grid grid-cols-4 gap-4">
  {% for item in galery.img %}
    <div class="">
      <a data-fancybox="gallery" href="{% asset '{{ item.src }}' @path %}" data-caption="{{ item.title }}">{% asset '{{ item.src }}' magick:resize='200x150^' magick:gravity='center' magick:crop='200x150+0+0' class="rounded" %}</a>
    </div>
  {% endfor %}
  </div>
</div>
{% endfor %}