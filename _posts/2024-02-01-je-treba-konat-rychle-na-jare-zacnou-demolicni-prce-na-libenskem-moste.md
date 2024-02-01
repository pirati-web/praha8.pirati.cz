---
title: "Je třeba konat rychle, na jaře začnou demoliční práce na Libeňském mostě" 
author: Zdeněk Hřib
image: posts/libenskymost-zakazvjezdu.jpg
tags: [Libeňský most, Doprava]
fancybox:
  - name: Vizualizace Libeňského mostu
    img:
      - { src: posts/vizualizace/libensky-most-2023/most2.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most3.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most4.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most1.jpg, title: Libeňský most (návrh Petra Teje) }
---

**Je to tady, práce na obnově konstrukce Libeňského mostu začnou už na jaře! V části soumostí na libeňské straně začne demolice stávající obloukové konstrukce, která bude nahrazena tvarovou replikou s odkazem na původní skicy architekta Janáka. Most s názvem X656 je teď totiž v havarijním stavu, což včas odhalilo jeho důkladné sledování takzvanou endoskopickou metodou.**

Nadějnou vyhlídkou pro Pražany ale je, že replika této části mostu nabídne daleko lepší využití. Na místě bývalého ramena Vltavy například vznikne mezi ulicemi Štorchova a Boudníkova nové přívětivé náměstíčko v podmostí. 

Celý prostor bude také daleko prostupnější, protože původní plnou klenbu oblouku nahradí na pohled vzdušněji působící klenbové pásy. Díky tomu také dojde k přímému propojení na novou občanskou vybavenost ve vestavbách okolo. Dosud se totiž jednalo o uzavřené prostory, teď se ale budou moci za velkými prosklenými vitrínami usídlit kavárny, obchůdky nebo další služby.

Co se týče tramvajové dopravy z Holešovic přes řeku, bude během tohoto měsíce obnovena až před uzavřenou část mostu, aby bylo omezení pro cestující co nejmenší.

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