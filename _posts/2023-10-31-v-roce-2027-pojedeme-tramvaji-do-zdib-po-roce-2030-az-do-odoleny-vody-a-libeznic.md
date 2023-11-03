---
title: "V roce 2027 pojedeme tramvají do Zdib, po roce 2030 až do Odoleny Vody a Líbeznic"
author: Martin Štěrba
image: posts/tramvaje-zdiby2.jpg
tags: [Doprava, Tramvaj do Zdib]
fancybox:
  - name: Jak bude vypadat dostavba ZŠ Lyčkovo náměstí? Podívejte se!
    img:
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-01.jpg, title: 'Zákres vedení tramvaje v Dolních Chabrech' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-02.jpg, title: 'Zákres vedení tramvaje ve Zdibech)' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-03.jpg, title: 'Plán vedení tramvaje ve Zdibech' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-04.jpg, title: 'Plán konečné tramvaje v Sedleci' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-05.jpg, title: 'Vizualizace tramvaje ve Zdibech' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-06.jpg, title: 'Vizualizace přemostění dálnice D8' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-07.jpg, title: 'Vizualizace konečné v Sedleci' }
---

**[Web Zdopravy.cz přišel s tím](https://zdopravy.cz/tramvaji-do-zdib-do-ctyr-let-stredocesky-kraj-schvalil-i-pokracovani-do-odoleny-vody-182520/), že Středočeský kraj dokončil dokumentaci na prodloužení tramvajové trati z Kobylis přes Nové Chabry, Zdiby do Sedlece. Zahájení výstavby tratě je plánováno na rok 2025, hotovo by mělo být v roce 2027.** Trať bude dlouhá zhruba 5,2 kilometru a končit bude u nového P+R parkoviště Sedlec, které bude mít kapacit 834 parkovacích míst. Podle plánů by sem v budoucnu měla jezdit linka číslo 10 a nová linka 27, která bude od Stírky kopírovat linku 17.

Jedním z nejvýraznějších plánů, která plyne z dohody s obcí Zdiby, je výstavba nové komunikace Nová Průběžná, která povede po jižní straně obce. Zaústěna bude do ulice Chaberské. Současná ulice Průběžná již kapacitně nestačí zejména autobusové dopravě. 

Středočeský kraj chce do budoucna tramvaje ještě dál. Ve hře je prodloužení tramvajové tratě do Odoleny Vody a do Líbeznic.

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