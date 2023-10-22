---
title: "Praha 8 hledá firmu na stavbu tělocvičny a jídelny při ZŠ Lyčkovo náměstí"
author: Piráti Praha 8
image: posts/vizualizace/dostavba-lyckovo-namesti/dostavba-zs-lyckovo4.jpg
tags: [Karlín, Školství]
fancybox:
  - name: Dostavba ZŠ Lyčkovo náměstí
    img:
      - { src: posts/vizualizace/dostavba-lyckovo-namesti/dostavba-zs-lyckovo1.jpg, title: Dostavba ZŠ Lyčkovo náměstí (vizualizace: Architektonický ateliér Aleš) }
      - { src: posts/vizualizace/dostavba-lyckovo-namesti/dostavba-zs-lyckovo2.jpg, title: Dostavba ZŠ Lyčkovo náměstí (vizualizace: Architektonický ateliér Aleš) }
      - { src: posts/vizualizace/dostavba-lyckovo-namesti/dostavba-zs-lyckovo3.jpg, title: Dostavba ZŠ Lyčkovo náměstí (vizualizace: Architektonický ateliér Aleš) }
      - { src: posts/vizualizace/dostavba-lyckovo-namesti/dostavba-zs-lyckovo4.jpg, title: Dostavba ZŠ Lyčkovo náměstí (vizualizace: Architektonický ateliér Aleš) }
      - { src: posts/vizualizace/dostavba-lyckovo-namesti/dostavba-zs-lyckovo5.jpg, title: Dostavba ZŠ Lyčkovo náměstí (vizualizace: Architektonický ateliér Aleš) }
---

**Radnice nedávno vypsala po tendru na Novou Palmovku největší zakázku na stavbu ve své historii. Předmětem je výstavba tělocvičny a jídelny s předpokládanou hodnotou veřejné zakázky ve výši 179.507.870,- Kč bez DPH.**

Jídelna bude mít kapacitu 132 míst a kuchyně kapacitu 1000 jídel denně a autorem je Architektonický ateliér Aleš. 

Soutěž na nadlimitní zakázku s názvem "Přístavba tělocvičny, školní jídelny a kuchyně, ZŠ Lyčkovo náměstí 6/460, Praha 8 –Karlín" zveřejnila Praha 8 na profilu zadavatele. Konečná cena může být ještě ovšem mnohem vyšší. Určitě to budeme sledovat.

Uchazeči se mohou do otevřeného výběrového řízení přihlásit a podat svou nabídku až do 27. listopadu 2023. Dle zadávací dokumentace se počítá se zahájením ještě před koncem tohoto roku s tím, že by lhůta plnění měla být 730 kalendářních dní. To znamená, že by hotovo mělo být za dva roky od zahájení stavby.

V minulých dnech vedení osmičkové radnice informovalo, že získalo od hlavního města Prahy dotaci na tuto stavbu ve výši 103 mil. Kde vezme další peníze, není zatím známo. Proto si MČ Praha 8 nechalo v návrhu Smlouvy o dílo kličku, že se stavební práce po vyčerpání této dotace pozastaví.

>"Zhotovitel potvrzuje, že byl objednatelem před podpisem této smlouvy informován, že cena díla je financována formou dotace poskytnuté ze strany hl. m. Prahy v maximální výši 103.000.000 Kč. S ohledem na to se smluvní strany dohodly, že zhotovitel je i bez písemného pokynu objednatele povinen přerušit provádění díla v okamžiku, kdy by cena prostavěné části díla měla překročit v souhrnu částku 103.000.000 Kč vč. DPH."

Věříme, že k tomu nedojde a nenastane podobný případ, jako když si radnice stavěla nové sídlo na Palmovce.

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
