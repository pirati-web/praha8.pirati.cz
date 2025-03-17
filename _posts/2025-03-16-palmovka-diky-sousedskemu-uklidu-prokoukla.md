---
title: "Palmovka díky sousedskému úklidu prokoukla"
author: Piráti Praha á
image: posts/2025-03-16-uklid-palmovky/uklid-palmovka2.jpg
tags: [Palmovka, Životní prostředí]
fancybox:
  - name: Stačilo málo, podívejte se
    img:
      - { src: posts/2025-03-16-uklid-palmovky/uklid-palmovka1.jpg, title: Sousedská akce na Palmovce }
      - { src: posts/2025-03-16-uklid-palmovky/uklid-palmovka2.jpg, title: Sousedská akce na Palmovce }
      - { src: posts/2025-03-16-uklid-palmovky/uklid-palmovka3.jpg, title: Sousedská akce na Palmovce }
      - { src: posts/2025-03-16-uklid-palmovky/uklid-palmovka4.jpg, title: Sousedská akce na Palmovce }
      - { src: posts/2025-03-16-uklid-palmovky/uklid-palmovka5.jpg, title: Sousedská akce na Palmovce }
      - { src: posts/2025-03-16-uklid-palmovky/uklid-palmovka6.jpg, title: Sousedská akce na Palmovce }
---

**Palmovka vypadá zase o kousek líp než dřív. Dnes ráno jsme se do toho pustili s našimi sousedy, ale také s lidmi z kavárny Pauza Palmovka a kolegy z opozičních stran Osmička žije, Mourek a Zelení. Naplnili jsme spoustu pytlů s odpadky, odstranili náletové křoviny a také upravili cesty. Mimochodem mají tu skvělou kávu, tak se tu také stavte.**

"Palmovka prokoukla. A rád jsem tomu trošku pomohl. Do dnešní nedělní úklidové sousedské akce se zapojily desítky lidí, kterým není jedno, jak to u nás na osmičce vypadá," říká předseda osmičkových Pirátů Martin Štěrba. 

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

