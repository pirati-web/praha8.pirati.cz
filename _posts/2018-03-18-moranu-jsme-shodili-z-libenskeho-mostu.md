---
title: Moranu jsme shodili z Libeňského mostu
authorId: tomas.marik 
date: 2018-03-18
image: posts/vynasenimorany-2018/morana5.jpg
tags: [Libeňský most, Piráti]
fancybox:
  - name: Vynášení Morany
    img:
      - { src: posts/vynasenimorany-2018/morana1.jpg, title: Vynášení Morany }
      - { src: posts/vynasenimorany-2018/morana2.jpg, title: Vynášení Morany }
      - { src: posts/vynasenimorany-2018/morana3.jpg, title: Vynášení Morany }
      - { src: posts/vynasenimorany-2018/morana4.jpg, title: Vynášení Morany }
      - { src: posts/vynasenimorany-2018/morana5.jpg, title: Vynášení Morany }
      - { src: posts/vynasenimorany-2018/morana6.jpg, title: Vynášení Morany }
      - { src: posts/vynasenimorany-2018/morana7.jpg, title: Vynášení Morany }
      - { src: posts/vynasenimorany-2018/morana8.jpg, title: Vynášení Morany }
---

**V neděli 18. března 2018 pořádalo Místní sdružení Pirátů na Praze 8 akci Vynášení Morany na Libeňském mostu.**

Vynášení Morany je prastarý západoslovanský zvyk, který se tradičně pořádá na Smrtnou (tedy 5. postní) neděli a udržel se dodnes. Cílem je vynést Moranu, tedy smrt, která zastupuje zimu a zlo, a očistit se před nadcházejícím jarem. K tomu se nese slaměná panna, která se následně zapálí a nechá odnést řekou.

Symbolický náboj tohoto zvyku dobře zapadá do současné situace Prahy, která je pomyslnou zimou vycházející z magistrátu a radnic sužována už příliš dlouho, přičemž nadcházející letošní komunální volby dávají určitou naději na změnu. Jako místo konání jsme si nemohli vybrat lepší místo než Libeňský most, který je jedním z nejostudnějších příkladů špatné péče o Prahu, most, na kterém se zlo podepsalo takovým způsobem, že hrozí jeho zřícení a demolice.

V třeskutém mrazu se nás sešlo kolem 35 – Pirátů, nepirátů, dospělých a dětí. Za veselého zpěvu lidových písní, doprovázeném bubnem, jsme vynášeli dvě Morany, jednu ženskou a jednu mužskou. Popíjeli jsme horký čaj a grog a oslavu uzavřeli obědem v blízké restauraci.

Doufáme, že tímto rituálem jsme nejen napomohli příchodu teplejšího ročního období, ale že se nám podařilo spolu s Moranami vynést i leccos špatného. Zúčastnění se shodli, že akce byla zábavná a radostná. Vyzkoušeli jsme si na vlastním těle, že lidové společenské akce, kterých se v historii v Praze pořádalo podstatně více, mají velký význam pro upevnění společenských vztahů a věříme, že se nám tímto podařilo položit základy nové tradice Pirátské strany na Praze 8 do budoucích let.

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

