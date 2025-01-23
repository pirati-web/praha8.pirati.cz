---
title: "Starosta Gros svolal na žádost Pirátů mimořádné zastupitelstvo"
author: Piráti Praha 8
image: posts/bily-dum-napis.jpg
tags: [Zastupitelstvo, ODS, ÚOHS]
fancybox:
  - name: Důvody pro svolání mimořádného zastupitelstva MČ Praha 8
    img:
      - { src: dokumenty/mimoradne-zastupitelstvo-2025-02/obr1.jpeg, title: Mimořádné zastupitelstvo MČ Praha 8}
      - { src: dokumenty/mimoradne-zastupitelstvo-2025-02/obr2.jpeg, title: Mimořádné zastupitelstvo MČ Praha 8}
      - { src: dokumenty/mimoradne-zastupitelstvo-2025-02/obr3.jpeg, title: Mimořádné zastupitelstvo MČ Praha 8}
      - { src: dokumenty/mimoradne-zastupitelstvo-2025-02/obr4.jpeg, title: Mimořádné zastupitelstvo MČ Praha 8}
      - { src: dokumenty/mimoradne-zastupitelstvo-2025-02/obr5.jpeg, title: Mimořádné zastupitelstvo MČ Praha 8}
---

**Děkujeme starostovi Ondřeji Grosovi z ODS za rychlé svolání mimořádného zastupitelstva naší městské části. Uskuteční se ve čtvrtek 6. 2. 2025 od 10 hodin v Bílém domě.**

![Svolání zastupitelstva](/assets/img/dokumenty/zmc-pozvanka-2025-02-25.jpg)

Zastupitelský klub Piráti Praha 8 společně s klubem 8Žije/Praha sobě předložil starostovi Ondřeji Grosovi (ODS) 15 podpisů potřebných ke svolání mimořádného zastupitelstva MČ Praha 8. Důvodem je nedávno udělená 300 tisícová pokuta od Úřadu pro ochranu hospodářské soutěže (ÚOHS) pro městskou část za nesprávné zadávání zakázek v letech 2021-2023. 

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

