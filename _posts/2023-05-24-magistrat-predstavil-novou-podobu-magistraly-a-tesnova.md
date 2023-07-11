---
title: "Hranice Prahy 8 a Prahy 1 se promění, magistrála by mohla jít na zem"
author: Piráti Praha 8
image: posts/2023-05-24-nova-podoba-tesnova/magistrala1.jpg
tags: [Doprava, Magistrát]
fancybox:
  - name: Možná podoba Těšnova
    img:
      - { src: posts/2023-05-24-nova-podoba-tesnova/magistrala1.jpg, title: Ideová studie Magistrály }
      - { src: posts/2023-05-24-nova-podoba-tesnova/magistrala2.jpg, title: Ideová studie Magistrály }
      - { src: posts/2023-05-24-nova-podoba-tesnova/magistrala3.jpg, title: Ideová studie Magistrály }
      - { src: posts/2023-05-24-nova-podoba-tesnova/magistrala4.jpg, title: Ideová studie Magistrály }
---

**Poznáváte tato místa? Jedná se o Těšnov, který je na hranici městských částí Praha 8 a Praha 1. V současné době tady prochází magistrála, kde denně projíždějí tisíce aut. To by se ale v příštích letech mohlo změnit.**

Náměstek pro dopravu Zdeněk Hřib představil společně s náměstkem pro územní rozvoj Petrem Hlaváčkem ideovou studiu nové podoby magistrály. V dlouhodobější vizi bychom mohli počítat i s tím, že se v okolí Těšnova magistrála přesune na zem, a zmizí estakáda.

Jedná se o řešení, které počítá s postupným zklidňováním automobilové dopravy v centru. Jak píše Zdeněk ve svém příspěvku, potom bude příležitost vytvořit na Těšnově příjemnou zelenou volnočasovou oázu klidu společně se vznikem nového archeologického muzea. K tomuto záměru se ale budeme moci opravdu dostat až ve chvíli, kdy nastane posun v dostavbě okruhů.

Co na to říkáte? 🙂

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

📸 vizualizace: Ateliéry De Architekten Cie. a Lola Landscape architects společně s brněnským architektonickým studiem M2AU