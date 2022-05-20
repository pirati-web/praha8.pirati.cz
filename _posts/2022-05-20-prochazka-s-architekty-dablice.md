---
title: Na procházku s architekty Vize sídliště Ďáblice dorazily stovky lidí
authorId: martin.sterba
image: posts/2022-05-19-prochazka-dablice/dablice3.jpeg
tags: [Ládví, Ďáblice]
fancybox:
  - name: Procházka po sídlišti Ďáblice
    img:
      - { src: posts/2022-05-19-prochazka-dablice/dablice1.jpeg, title: Procházka po sídlišti Ďáblice }
      - { src: posts/2022-05-19-prochazka-dablice/dablice2.jpeg, title: Procházka po sídlišti Ďáblice }
      - { src: posts/2022-05-19-prochazka-dablice/dablice3.jpeg, title: Procházka po sídlišti Ďáblice }
      - { src: posts/2022-05-19-prochazka-dablice/dablice4.jpeg, title: Procházka po sídlišti Ďáblice }
      - { src: posts/2022-05-19-prochazka-dablice/dablice5.jpeg, title: Procházka po sídlišti Ďáblice }
      - { src: posts/2022-05-19-prochazka-dablice/dablice6.jpeg, title: Procházka po sídlišti Ďáblice }
      - { src: posts/2022-05-19-prochazka-dablice/dablice7.jpeg, title: Procházka po sídlišti Ďáblice }
      - { src: posts/2022-05-19-prochazka-dablice/dablice8.jpeg, title: Procházka po sídlišti Ďáblice }
---

**Čtvrteční procházka s architekty Vize sídliště Ďáblice pod taktovkou uskupení Krásné Kobylisy se moc povedla. Dorazilo několik stovek lidí, kteří se aktivně zajímají o osud nejkrásnějšího českého sídliště a já jsem rád, že jsem se s řadou z vás mohl vidět osobně a popovídat si s vámi o budoucnosti Ďáblic.**

Cestu jsme zahájili u Penny Marketu na Ládví a poté pokračovali k nedalekému parkovišti v Davídkově ulici, kde se strhla velká debata o budoucnosti tohoto místa. Magistrát totiž prověřuje, jestli by tady nemohlo vzniknout modulární bydlení. V místě je nedostatek parkovacích míst, a spíš než nový dům, by místo zasloužit kultivaci parkování. Navíc stavět tady cokoliv proti vůli místních je prostě špatně. Je třeba najít takové řešení, které bude vyhovovat všem. Studie Vize Sídliště Ďáblice tady navíc s žádnou stavbou nepočítá, tak se do toho ani v budoucnu nepouštějme. 

V cestě jsme se zastavili také u objektů Včel, kde by CPI chtěla postavit obří věžáky. I jejich výstavbu samozřejmě odmítáme. [Dlouhodobě totiž opakujeme, že jsme proti zahušťování sídlišť.](https://praha8.pirati.cz/aktuality/sidliste-nezahustovat-nejsou-polevka-nove-byty-patri-na-brownfieldy.html) A obří věžáky sem zkrátka nepatří. 

Krátce jsme pobyli také u louky vedle Základní školy Žernosecká. I když se původně plánovalo, že bude louka zastavěná, návrh Metropolitního plánu počítá se zachováním zeleně. A to je dobře. 

Cestu jsme zakončili na střeše sídla Centra akvizičních programů Praha 8 v Burešově ulici, odkud je krásný výhled nejen na celé sídliště Ďáblice, ale i na celou Prahu. Však se podívejte sami.

Moc děkuji za skvělou procházku a diskuze o budoucnosti sídliště Ďáblice samozřejmě nekončí. [Příští týden se koná veřejné setkání v kulturním domě Ládví.](https://www.facebook.com/events/1171329296974774)

% for galery in page.fancybox %}
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
