---
title: "Příprava ZŠ Rohan míří do další fáze"
author: Piráti Praha 8
image: posts/vizualizace/zs-rohan-prosinec2024/skola1.jpg
tags: [Karlín, Rohanský ostrov, Zastupitelstvo, Školství, Územní rozvoj, Základní škola Rohan]
fancybox:
  - name: Takhle bude nová škola vypadat. Co na ní říkáte?
    img:
      - { src: posts/vizualizace/zs-rohan-prosinec2024/skola1.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-prosinec2024/skola2.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-prosinec2024/skola3.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-prosinec2024/skola4.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-prosinec2024/skola5.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-prosinec2024/skola6.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
---

Nová škola na Rohanském ostrově bude skvělá, pevně v to doufáme. Na středečním zastupitelstvu jsme řešili aktuální stav příprav a máme radost z toho, že jsme napříč politickým spektrem odsouhlasili návrh stavby. Posouváme se tak do další fáze a to zadání dokumentace pro stavební povolení.

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
<br/>
