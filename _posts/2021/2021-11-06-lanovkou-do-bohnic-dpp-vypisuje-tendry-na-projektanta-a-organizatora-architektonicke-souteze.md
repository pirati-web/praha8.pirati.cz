---
title: Lanovkou do Bohnic? Dopravní podnik vypisuje tendry na projektanta a organizátora architektonické soutěže
author: Martin Štěrba
image: posts/vizualizace/lanovka-bohnice-podbaba/vizualizace3.jpg
tags: [Bohnice, Doprava, Lanovka Bohnice–Podbaba, Magistrát]
fancybox:
  - name: Lanovka Bohnice–Podbaba
    img:
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/vizualizace1.jpg, title: Lanovka Bohnice–Podbaba 1 }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/vizualizace2.jpg, title: Lanovka Bohnice–Podbaba 2 }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/vizualizace3.jpg, title: Lanovka Bohnice–Podbaba 3 }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/vizualizace4.jpg, title: Lanovka Bohnice–Podbaba 4 }
---

**Dopravní podnik hlavního města Prahy vypsal veřejnou zakázku na projektanta lanovky z Podbaby přes ZOO do Bohnic a tendr na organizátora mezinárodní architektonické soutěže na podobu tří stanic lanovky a pěti podpůrných pilířů. Vítězové obou zakázek by měli být známí do konce ledna 2022.** [Realizaci lanovky Podbaba – Troja – Bohnice schválila Rada hlavního města Prahy v létě 2020.](https://praha8.pirati.cz/aktuality/potvrzeni-lanovky-do-bohnic.html). Předpokládaná délka je cca 2,3 km a předpokládané náklady na její výstavbu jsou odhadovány na přibližně dvě miliardy korun.

>"Prvním úkolem projektanta bude příprava dokumentace k posouzení vlivu stavby na životní prostředí, takzvaná EIA, její projednání a získání kladného stanoviska. To bude zcela zásadní bod tohoto projektu. Až na základě výsledků EIA bude projektant moci vypracovat finální projektovou dokumentaci pro sloučené územní a stavební řízení,“ uvedl [pro web ZDopravy.cz](https://zdopravy.cz/dpp-hleda-projektanta-a-organizatora-architektonicke-souteze-na-lanovku-z-podbaby-do-bohnic-95889/) člen představenstva a technický ředitel DPP pro povrchovou dopravu Jan Šurovský.
 
>"Za několik měsíců představíme výsledky a pak se naplno rozběhnou projekční práce. Už aby to bylo. Lidé ze Šestky a Osmičky se na pořádné spojení načekali dost dlouho. Když se dnes potřebujete dostat ze zastávky Krakov na sídlišti Bohnice na Vítězné náměstí, musíte autobusem do Kobylis, odtud metrem na Vltavskou a pak tramvají. Nebo z Kobylis metrem do centra s přestupem na Muzeu a pak zase nahoru Áčkem na Dejvickou. Obě varianty zaberou 40 minut. Lanovkou zkrátíme cestu na 15 minut s cestou k jejím zastávkám," napsal [na své sociální sítě](https://www.facebook.com/adam.praha.sobe/posts/952359762028717) náměstek primátora pro dopravu Adam Scheinherr (Praha sobě).

Lanová dráha, která spojí Bohnice, ZOO a Podbabu vzbuzuje mnohé diskuze. Mnozí a to včetně nás se ptají spíše po tramvajovém spojení, které v Bohnicích a k ZOO dlouhodobě chybí. tKdyž se dnes potřebujete dostat ze zastávky Krakov na sídlišti Bohnice na Vítězné náměstí v Praze 6, musíte autobusem do Kobylis, odtud metrem na Vltavskou a pak tramvají. Nebo z Kobylis metrem do centra s přestupem na Muzeu a pak zase nahoru áčkem na Dejvickou. Obě varianty zaberou 40 minut. 

>"Nemůžu mluvit za Piráty jako celek, budu tedy mluvit pouze za sebe. Já bych stavěl most z Podbaby k ZOO, protáhl tramvaj z Podbaby až k zadnímu vchodu do ZOO, a poté dopravu vedl nahoru lanovkou do Bohnic. Tramvajové spojení mezi ZOO a Bohnicemi mi přijde neekonomické, byť chápu, že to je o přestup navíc. Tramvajové spojení Bohnic by mělo být hlavně na Kobylisy," napsal do diskuze [ve skupině Libeň, Karlín](https://www.facebook.com/groups/356845051103718/posts/4463621063759409/) předseda místního sdružení a koordinátor gesce dopravy [Martin Štěrba](https://praha8.pirati.cz/lide/martin-sterba.html).

>"Kdyby se chtělo, tak ten most pro tramvaje a IZS (co je v územním plánu a o kterém se už 20 let mluví) může být rychle. Ono se ale moc nechce, protože se teď někdo zamiloval do lanovky a tlačí lanovku jako "rychlé a levné" řešení. Lanovka přes řeku a čističku odpadních vod je ptákárna. Lanovka do kopce místo drahého tunelu by smysl dávala," píše v diskuzi zastupitel za Piráty [Pavel Franc](https://praha8.pirati.cz/lide/pavel-franc.html).

Na závěr ještě uvedeme, že Magistrát plánuje v okolí Podbaby skutečně postavit nový most, který spojí Prahu 6 a Prahu 8. Po tomto mostě mají skutečně jezdit tramvaje k novému "zadnímu vchodu" do ZOO. Existují i plány na kilometrový ražený tramvajový tunel z Tróji do Bohnic. To jsou ale plány zhruba do roku 2050. 

Podívejte se, jak vypadá lanovka na vizualizaci Metroprojektu. Její skutečná podoba ale vzejde až z mezinárodní architektonické soutěže.

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
