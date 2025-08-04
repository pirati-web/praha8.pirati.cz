---
title: "Dycky Most! Jak bude vypadat dálniční most přes údolí Vltavy?"
author: Martin Štěrba
image: posts/2025-08-04-dalnicni-most/most1.jpg
tags: [Pražský okruh (dálnice D0), Doprava, Bohnice, Čimice]
fancybox:
  - name: Vítězná podoba mostu přes údolí
    img:
      - { src: posts/2025-08-04-dalnicni-most/most1.jpg, title: 'vizualizace: Stráský, Hustý a partneři a Studio acht.'}
      - { src: posts/2025-08-04-dalnicni-most/most2.jpg, title: 'vizualizace: Stráský, Hustý a partneři a Studio acht.'}
      - { src: posts/2025-08-04-dalnicni-most/most3.jpg, title: 'vizualizace: Stráský, Hustý a partneři a Studio acht.'}
      - { src: posts/2025-08-04-dalnicni-most/most4.jpg, title: 'vizualizace: Stráský, Hustý a partneři a Studio acht.'}
---

**Jak bude vypadat dálniční most, který spojí Suchdol a Březiněves v rámci Pražského okruhu? To ukázala otevřená architektonická soutěž.**

Vítězem soutěže se stali Stráský, Hustý a partneři a Studio acht. Podle poroty nabídli nejlepší architektonické i technické řešení mostu i obou předmostí – a zároveň návrh nejméně narušuje charakter Vltavského údolí.

To ale ještě neznamená, že se most postaví právě podle vítězného návrhu. V dalších fázích se bude rozhodovat mezi pěti nejlepšími, a do hry vstoupí i náklady na výstavbu a provoz. [Kompletní výsledky najdete na webu České komory architektů.](https://www.cka.cz/souteze/databaze/d0-stavba-519-suchdol-brezineves-most-pres-vltavu?fbclid=IwY2xjawL9loRleHRuA2FlbQIxMABicmlkETFqbkc0VURnTGk1Z0toekRxAR7wg5aDUtCwlCkJDwDsEFX8crVsfaaqQx7YXHSs-jvpdAuph-2kSqiR7y-xRg_aem_gxvNgjUyJjza92CwLrZ_Jg)

**Co na návrh říkáte vy? Já z toho mám celkem dobrý pocit.**

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