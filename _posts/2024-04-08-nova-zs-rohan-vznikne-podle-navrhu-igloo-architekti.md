---
title: "Nová Základní škola Rohan vznikne nakonec podle návrhu IGLOO Architekti"
author: Martin Štěrba
image: posts/vizualizace/zs-rohan-2-misto/3.jpg
tags: [Karlín, Rohanský ostrov, Rada MČ Praha 8, Školství, Územní rozvoj, Základní škola Rohan]
fancybox:
  - name: Základní škola Rohanský ostrov (2. místo)
    img:
      - { src: posts/vizualizace/zs-rohan-2-misto/1.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/2.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/3.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/4.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/5.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/6.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
---

**Po nedávných trablech s vítězným návrhem nové podoby Základní školy Rohan je jasno. Nová škola na Rohanském ostrově se bude stavět podle návrhu studia IGLOO ARCHITEKTI, které skončilo na druhém místě.**

Rada dnes na mimořádném jednání schválila smlouvu na vytvoření projektové dokumentace, vytvoření informačního modelu stavby metodou BIM, vytvoření návrhu interiéru, výkon inženýrské činnosti a autorského dozoru.

Nová škola bude mít kapacitu až 810 žáků, vznikne v ní 3x9 kmenových tříd a 13 speciálních tříd a dílen. Součástí školy by měla být také jídelna se školní kuchyní.

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