---
title: "Operace Anthropoid patří mezi ty historické momenty, které je třeba si připomínat neustále dokola"
author: Piráti Praha 8
image: posts/2025-05-27-anthropoid/anthropoid3.jpg
tags: [Anthropoid, Libeň]
fancybox:
  - name: Podívejte se na fotky z pietního aktu
    img:
      - { src: posts/2025-05-27-anthropoid/anthropoid1.jpg, title: Pietní akt u pomníku Operace Anthropoid }
      - { src: posts/2025-05-27-anthropoid/anthropoid2.jpg, title: Pietní akt u pomníku Operace Anthropoid }
      - { src: posts/2025-05-27-anthropoid/anthropoid3.jpg, title: Pietní akt u pomníku Operace Anthropoid }
      - { src: posts/2025-05-27-anthropoid/anthropoid4.jpg, title: Pietní akt u pomníku Operace Anthropoid }
      - { src: posts/2025-05-27-anthropoid/anthropoid5.jpg, title: Pietní akt u pomníku Operace Anthropoid }
      - { src: posts/2025-05-27-anthropoid/anthropoid6.jpg, title: Pietní akt u pomníku Operace Anthropoid }
---

**Jsme Češi! Nikdy se nevzdáme! Tato slova patřila parašutistům v čele s Janem Kubišem a Jozefem Gabčíkem, kteří 27. května 1942 provedli atentát na zastupujícího říšského protektora Reinharda Heydricha.**

Dnes dopoledne jsme si tuto hrdinskou událost jako každý rok připomněli u zatáčky poblíž Vychovatelny. Po boku ministryně obrany Jany Černochové, starosty Prahy 8 Ondřeje Grose, senátorky Vladimíry Ludkové a dalších jsme položili květiny k památníku i my. Historii si musíme totiž neustále připomínat. 

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