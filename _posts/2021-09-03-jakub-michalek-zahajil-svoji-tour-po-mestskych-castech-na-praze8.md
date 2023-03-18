---
title: Jakub Michálek zahájil svojí tour po městských částech na Praze 8
author: Martin Štěrba
image: posts/novapalmovka-s-jakubem-michalkem.jpg
tags: [Volby 2021]
fancybox:
  - name: Zahájení tour po městských částech s Jakubem Michálkem
    img:
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek1.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 1 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek2.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 2 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek3.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 3 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek4.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 4 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek5.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 5 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek6.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 6 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek7.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 7 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek8.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 8 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek9.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 9 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek10.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 10 }
      - { src: posts/2021-09-03-tour-jakubmichalek/tour-jakubmichalek11.jpg, title: Zahájení tour po městských částech s Jakubem Michálkem 11 }
---

**Po letních prázdninách jsme opět vyrazili do ulic. A zářijové zahájení ostré fáze kampaně do Poslanecké sněmovny jsme si nemohli přát lepší.** Předseda pirátského poslaneckého klubu [Jakub Michálek](https://www.pirati.cz/lide/jakub-michalek/) u nás zahájil svojí tour po městských částech a my jsme ho provedli z Palmovky přes Rohanský ostrov až na Florenc. Společně s ním, poslancem [Janem Lipavským](https://www.pirati.cz/lide/jan-lipavsky/), senátorem za Prahu 8 [Lukášem Wagenknechtem](https://praha8.pirati.cz/lide/lukas-wagenknecht.html) a mnohými dalšími jsme pak na Florenci rozdali stovky koaličních listů a stovky jahodových nanuků.

>"Městskou část Praha 8 jsem si nezvolil náhodou. Dlouhé roky jsem v Libni s rodiči bydlel, a na Palmovku jsem chodil do školy. A do míst, kde dneska stojí torzo nedostavěné radnice jsme po škole chodili hrát a nakukovat za plot. Ta nedostavěná radnice se jmenuje Nová Palmovka. Městská část Praha 8 ji staví už deset let, stála nás už miliardu a čtvrt, a dnes už víme, že úředníci městské části Praha 8 v té budově nikdy sedět nebudou. Je to prostě ukázka toho, že z cizího krev neteče a jak probendit výnosy z privatizace bytů. Snad se s ním konečně začne něco dělat, protože současný stav je opravdu hrozný. Magistrát už dlouho řeší s městskou částí, co dál. A jsem rád, že se do toho procesu zapojují i Piráti Praha 8. Držím palce, aby to do konce roku klaplo," říká předseda poslaneckého klubu Pirátů Jakub Michálek.

Jak říká Jakub Michálek, máme na to za měsíc a kousek tyhle stěžejní volby vyhrát. Chceme totiž změnit nejen Palmovku, ale celou naší budoucnost. Nenechme si jít vzít oligarchou a na něj napojenými šíbry.

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
