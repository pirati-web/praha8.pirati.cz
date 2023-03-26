---
title: "Pátráme po bohnických múzách Olbrama Zoubka"
author: Karolína Gattermayerová
image: posts/bohnice-olbram-zoubek.jpg
tags: [Karlín, Kasárna Karlín, Magistrát, Vědecko-technologický park]
fancybox:
  - name: Prohlídka Kasárna Karlín
    img:
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin1.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin2.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin3.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin4.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin5.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin6.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin7.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin8.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin9.jpg, title: Prohlídka Kasárna Karlín }
      - { src: posts/2023-03-22-kasarna-karlin/kasarnakarlin10.jpg, title: Prohlídka Kasárna Karlín }
---

**Před pár dny mě volal pražský radní pro ICT, vědu a výzkum Daniel Mazur a pozval mě na prohlídku Kasárna Karlín. Ten prostor samozřejmě znám, rád tam v létě chodím na drink a posedět, ale v prázdných historických budovách jsem nikdy nebyl. Věděli jste, že kromě vojáků sídlili v budově také policisté, kteří tam měli i cely předběžného zadržení? Já jsem to nevěděl.**

Nic však není jen tak náhodou, a i prohlídka měla svůj důvod. Bývalá kasárna by se totiž mohla stát místem, kde vznikne pražský vědecko-technologický park. Vznikla by se zde nová pracovní místa a park by umožnil spolupráci mezi univerzitami, firmami a vědeckými institucemi. Mohl by být také atraktivním místem pro mladé vědce. A nejen pro ně, protože nádvoří i objekty garáží by i nadále mohly sloužit kultuře a trávení volného času. 

Myslím, že Kasárna Karlín je pro vědecko-technologický park vhodným místem. Je to od něj blízko na autobusové i vlakové nádraží, je kousek od stanice metra Florenc. 

Budova je řadu let prázdná a čeká se až doběhnou velké majetkové výměny mezi státem a hlavním městem. Byla by škoda, kdyby tak krásný prostor zůstal další roky bez využití a chátral by.

**Líbilo by se Vám takové využití? Co na to říkáte?**

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