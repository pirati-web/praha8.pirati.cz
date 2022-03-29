---
title: Nové náměstí Bohumila Hrabala na Palmovce bude zelené, moderní a hrabalovsky lidské
author: MHMP
image: posts/namestibohumilahrabala.png
tags: [Magistrát, Nová Palmovka, Palmovka, Veřejný prostor, Životní prostředí]
fancybox:
  - name: Náměstí Bohumila Hrabala dostane novou tvář
    img:
      - { src: posts/namesti-bohumila-hrabala/namhrabala1.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář }
      - { src: posts/namesti-bohumila-hrabala/namhrabala2.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář }
      - { src: posts/namesti-bohumila-hrabala/namhrabala3.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář }
      - { src: posts/namesti-bohumila-hrabala/namhrabala4.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář }

---

**Nové náměstí, jež do roku 2025 vznikne v prostoru mezi stávajícím autobusovým nádražím a ulicí Na Žertvách v Praze 8, se stane hned v několika ohledech ukázkovým příkladem řešení městského veřejného prostoru. Palmovka přitom nadále zůstane významným uzlem pro chodce i cestující MHD, kde pohyb lidí je navržen s ohledem na jejich kvalitní orientaci a maximální bezpečnost. Předběžný rozpočet obnovy náměstí je stanoven na 80 milionů korun, investorem je Magistrát hl. m. Prahy.**

Důležitou součást projektu tvoří také zeleň a vodní prvky vytvářející příjemné mikroklima. A Bohumila Hrabala, po němž je náměstí pojmenováno, budou v duchu poetiky jeho textů připomínat drobné instalace a zdánlivě nenápadné prvky poutající pozornost chodců.

>"I díky velmi citlivému řešení na novém náměstí vznikne kultivovaný prostor pro cestující, setkávání i zákoutí pro dětské aktivity. A to celoročně, čemuž napomohou nejen zelené střechy stromů, ale také příjemné kavárny v objektu ochranného systému metra a další zastřešené prostory. Vše v přirozeném, lidském měřítku a s řadou překvapivých, hravých momentů odkazujících k Bohumilu Hrabalovi,“ říká radní hl. m. Prahy pro oblast správy majetku Jan Chabr (TOP 09)

>"Návrh byl v průběhu roku konzultován a prezentován zástupcům městské části Praha 8, vedení Magistrátu hlavního města Prahy, Institutu plánování a rozvoje Prahy nebo Galerie hlavního města Prahy. Připomínky a podněty nevedly ke kompromisu, naopak pomohly návrh ještě zlepšit ku prospěchu budoucích uživatelů. Jsem přesvědčený, že projekt na Palmovce umožní vytvořit náměstí 21. století a klíčový veřejný prostor v Praze,“ konstatuje Tomáš Hřebík (STAN), radní městské části Praha 8 pro strategický rozvoj.

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

Architektům z ateliéru UNIT se podařilo překonat četné komplikované vztahy v řešené lokalitě. K nejcitlivějším patřilo napojení na podzemní tubus metra, kdy například nebylo možné osázet celou plochu nad ním zelení, a zároveň na povrchovou dopravu. Zachovány zůstanou všechny tramvajové tratě, zůstane i část autobusových linek, ovšem jako elektrobusy či trolejbusy.

>"Podoba náměstí vychází zejména z návrhů samotných obyvatel. Rozloučíme se s individui, která nyní Palmovku okupují a vytvoříme zde příjemné místo pro setkávání místních. Náměstí bude konečně vypadat tak, jak si zaslouží, a ne jako prostor, kterým se ve večerních hodinách bojíte procházet,“ komentuje plán na proměnu Palmovky Petr Pelc (TOP 09), koordinátor projektu Palmovka TEĎ.

Velmi podstatným momentem je, že realizace náměstí bude koordinována s výstavbou polyfunkčního objektu Palmovka One, který navrhli architekti ze studia Obermeyer Helika. Libeň, pro kterou je tento prostor zásadní, tak získá hned dva důležité impulsy pro celkovou revitalizaci.

>Přijali jsme odpovědnost za proměnu celé této části metropole. Proto už několik let neřešíme jen architekturu a poměr funkcí Palmovka One, ale i jeho okolí. Výsledkem je náměstí Bohumila Hrabala kvalitou dosahující evropských měřítek. A třeba i naše snaha o kvalitní obnovu a zpřístupnění plochy kolem unikátního objektu Libeň – dolní nádraží,“ doplňuje Kamil Hošták ze společnosti Landia Management, která je společně s Discovery Group investorem Palmovka One a společně s městskou částí Praha 8 byla zadavatelem studie nového náměstí Bohumila Hrabala.

### Ke stažení
- [Studie Náměstí Bohumila Hrabala (UNIT, 6/2021)](https://mrak.pirati.cz/s/GcS6JiZ9dqAX7Pk)
 
