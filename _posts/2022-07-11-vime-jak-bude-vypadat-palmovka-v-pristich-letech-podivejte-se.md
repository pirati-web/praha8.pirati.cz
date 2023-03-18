---
title: "Víme, jak bude vypadat Palmovka v příštích letech! Podívejte se!"
authorId: karel.ptacek
image: posts/vizualizace/palmovka/palmovka-vizualizace6.jpg
tags: [Palmovka, Nová Palmovka, Územní rozvoj]
fancybox:
  - name: Náměstí Bohumila Hrabala dostane novou tvář
    img:
      - { src: posts/vizualizace/namesti-bohumila-hrabala/namhrabala1.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář (vizualizace studio MISS3) }
      - { src: posts/vizualizace/namesti-bohumila-hrabala/namhrabala2.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář (vizualizace studio MISS3) }
      - { src: posts/vizualizace/namesti-bohumila-hrabala/namhrabala3.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář (vizualizace studio MISS3) }
      - { src: posts/vizualizace/namesti-bohumila-hrabala/namhrabala4.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář (vizualizace studio MISS3) }
fancybox2:
  - name: Palmovka v příštím desetiletí
    img:
      - { src: posts/vizualizace/palmovka/palmovka-vizualizace3.jpg, title: Palmovka v příštím desetiletí (vizualizace studio MISS3) }
      - { src: posts/vizualizace/palmovka/palmovka-vizualizace4.jpg, title: Palmovka v příštím desetiletí (vizualizace studio MISS3) }
      - { src: posts/vizualizace/palmovka/palmovka-vizualizace5.jpg, title: Palmovka v příštím desetiletí (vizualizace studio MISS3) }
      - { src: posts/vizualizace/palmovka/palmovka-vizualizace6.jpg, title: Palmovka v příštím desetiletí (vizualizace studio MISS3) }
---

**Okolí Palmovky je dlouhodobě zanedbané a její stav bohužel neutěšený. Během několika následujících let se začne výrazně měnit a již nyní se usilovně pracuje na jejich přípravách, které umožní zásadní proměnu. Palmovka bude v budoucnu vyhledávanou lokalitou s plně dostupnou a potřebnou občanskou vybaveností.**

[Často se diskutuje o přeměně současného autobusového nádraží](https://praha8.pirati.cz/aktuality/nove-namesti-bohumila-hrabala-na-palmovce-bude-zelene-moderni-a-hrabalovsky-lidske.html). Tyto pozemky Dopravní podnik před lety prodal investorovi, který na místě postaví soubor budov s propojením vstupu do metra a budoucího náměstí Bohumila Hrabala.

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
<br />
Přímo na křižovatce, poblíž křížení ulic Zenklova a Libeňský most [vyroste dvojdům určený především pro městské nájemní bydlení](https://praha8.pirati.cz/aktuality/magistrat-na-palmovce-postavi-novy-polyfunkcni-dum-jak-bude-vypadat.html). V přízemí a prvních dvou patrech se počítá s nebytovými (maloobchodními a administrativními) prostory, ve vyšších patrech s byty o různých dispozicích. Aktuálně je vyhlášena soutěž na zpracovatele architektonického návrhu pro celý pozemek a projektové dokumentace pro první z budov. Investorem je Hlavní město Praha. 

Asi nejzásadnější prostor pro budoucí zástavbu Palmovky je tzv. oblast Pentagonu. Je to území ohraničené ulicemi Voctářova, U Rustonky, Sokolovská, Zenklova až k Libeňskému mostu. Hlavní město Praha, která je největším vlastníkem tamních pozemků uzavřela memorandum s ostatními vlastníky, jako je Dopravní podnik, nebo MČ Praha 8, aj. o společném postupu a koordinaci tohoto záměru. Celé to bylo svěřené Pražské developerské společnosti, což je příspěvková organizace zřízena hlavním městem Prahou. Autorem územní studie a projektu náměstí Bohumila Hrabala je ateliér Unit architekti, autorem vizualizací pak studio MISS3.

{% for galery in page.fancybox2 %}
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
<br />
Z územní studie, která se nyní pořizuje, je patrné, že by v lokalitě mělo vzniknout zdravotnické zařízení, školní zařízení a převážně nájemní byty.

### Model budoucí podoby Palmovky můžete vidět i osobně
V rámci Landscape festivalu je možné vidět vytvořený model tzv. "Pentagonu“ na Palmovce. Na základě pořizované uzemní studie Palmovky vznikla možná podoba budoucích objektů. Zajímavé je, že tento model počítá pouze se zachováním hlavní budovy rozestavěné původní radnice a ubouráním zamýšleného obchodního centra. Součástí záměru je i vznikl nového náměstí u dochované drážní budovy s pobytovými schody a parkem. Tento model spolu s dalšími informačními bannery je k vidění až do 2. října a to od středy do neděle vždy od 12 do 18 hodin na adrese Zenklova 2530/23.

### Ke stažení
- [Kompletní územní studie Palmovky](https://www.praha.eu/jnp/cz/o_meste/magistrat/odbory/odbor_uzemniho_rozvoje/uzemni_planovani/uzemni_studie/studie_porizovane/index.html)

      
     
