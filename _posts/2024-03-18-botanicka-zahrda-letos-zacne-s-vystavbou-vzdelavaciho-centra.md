---
title: "Botanická zahrada letos začne s výstavbou vzdělávacího centra"
author: Jana Komrsková
image: posts/vizualizace/botanicka-zahrada-pueblo/botanicka2.jpg
tags: [Bohnice, Botanická zahrada, Životní prostředí]
fancybox:
  - name: Vizualizace nové expozice v botanické zahradě
    img:
      - { src: posts/vizualizace/botanicka-zahrada-pueblo/botanicka1.jpg, title: Nová expozice bude umístěna v Horní zahradě, tedy v areálu v blízkosti vstupu od Sídliště Bohnice. }
      - { src: posts/vizualizace/botanicka-zahrada-pueblo/botanicka2.jpg, title: Nová expozice bude umístěna v Horní zahradě, tedy v areálu v blízkosti vstupu od Sídliště Bohnice. }
      - { src: posts/vizualizace/botanicka-zahrada-pueblo/botanicka3.jpg, title: Nová expozice bude umístěna v Horní zahradě, tedy v areálu v blízkosti vstupu od Sídliště Bohnice. }
---

**Botanická zahrada letos začne s výstavbou nové expozice a vzdělávacího centra Pueblo a vodní svět. Přirozeně naváže na již existující Severoamerickou prérii a ještě více návštěvníkům přiblíží přírodu a scenérie Severní Ameriky. Než se tak stane, prohlédněte si vizualizace.**

Nová expozice bude umístěna v Horní zahradě, tedy v areálu v blízkosti vstupu od Sídliště Bohnice. Rozšíří současné expozice s vodními plochami a pomocí nových vodní prvků vytvoří typický geografický celek Severní Ameriky – hluboce zařízlý kaňon s vodopádem. 

Na hraně kaňonu vyroste stavba přibližující život původních obyvatel tzv. pueblo. Částečně jako zázemí pro návštěvníky, především ale bude sloužit jako edukační a výukový prostor pro děti a mládež. Členitá stavba s terasovitými střechami přirozeně zapadne mezi návštěvnické trasy. Celou expozici v severní části završí nové iridárium pro rozsáhlou kolekci kosatců a denivek.

V současné době se v této části areálu botanické zahrady nachází rašeliniště s volnou vodní hladinou jezírka. Pro ucelené představení mokřadních biotopů bude v budoucnu expozice doplněna například o prameniště, vodní tok a velké jezero. 

Návštěvníkům by se nová expozice měla otevře za tři roky, v sezóně 2027.

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