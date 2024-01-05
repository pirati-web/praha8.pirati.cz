---
title: "Na Florenc se vrátila ikonická plastika hodin! Jak se vám líbí?"
author: Zdeněk Hřib
image: posts/florenc-hodiny.jpg
tags: [Florenc, Územní rozvoj, Veřejný prostor]
fancybox:
  - name: Jak bude vypadat Florenc?
    img:
      - { src: posts/2021-11-24-florenc21/florenc1.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc2.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc3.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc4.jpg, title: Budoucí podoba Florence podle architektů }  
      - { src: posts/2021-11-24-florenc21/florenc5.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc6.jpg, title: Budoucí podoba Florence podle architektů }
---

**Původní dominanta náměstíčka vedle stanice metra Florenc už byla v havarijním stavu. Do 40 let staré konstrukce zatékalo, takže došlo k jejímu nenávratnému poškození.**

Borcům z Technologie hlavního města Prahy, a.s. se ale podařilo vytvořit dokonalou repliku, která tu opět hlásí, kolik je hodin nejen u nás v Praze, ale také ve světových metropolích. A to navíc velmi stylově na klasické tabuli s překlapávacími čísly.

Mimochodem Florenc se teď stává doslova centrem probíhajících a očekávaných velkých proměn. Nedávno došlo například k rekonstrukci Negrelliho viaduktu a čeká nás revitalizace jeho okolí.

Přímo na Florenci pak probíhá velkolepá rekonstrukce stropní desky a stanice metra. V rámci toho ve vestibulu metra vznikne i nové světelné dílo, které jsme vám představili na konci minulého roku. No a nakonec do budoucna nás čeká i velká revitalizace celého prostoru kolem autobusového nádraží na základě soutěže Florenc 21. 

Tohle místo si už dávno zaslouží navrátit původní lesk a je super, že se to krok za krokem děje!

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