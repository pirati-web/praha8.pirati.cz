---
title: "Praha 8 chystá výstavbu nové sportovní haly Jana Máhora v Kobylicích. Nová sportoviště podporujeme!"
authorId: pavel.franc
image: posts/vizualizace/hala-jana-mahora/hala-jana-mahora4.jpg
tags: [Kobylisy, Sport, Školství]
fancybox:
  - name: Hala Jana Máhora v Kobyslicích
    img:
      - { src: posts/vizualizace/hala-jana-mahora/hala-jana-mahora1.jpg, title: Hala Jana Máhora v Kobylisích }
      - { src: posts/vizualizace/hala-jana-mahora/hala-jana-mahora2.jpg, title: Hala Jana Máhora v Kobylisích }
      - { src: posts/vizualizace/hala-jana-mahora/hala-jana-mahora3.jpg, title: Hala Jana Máhora v Kobylisích }
      - { src: posts/vizualizace/hala-jana-mahora/hala-jana-mahora4.jpg, title: Hala Jana Máhora v Kobylisích }
---

**Městská část Praha 8 chystá výstavbu nové sportovní haly Jána Mahora v Kobylisích, která by měla stát v areálu ZŠ Burešova.**

Halu budou v rámci výuky využívat žáci základní školy, sportovní kluby i široká veřejnost. Větší část haly tvoří podle návrhu víceúčelová hala pro míčové sporty s tribunami. Návrh haly splňuje požadavky na házenou, volejbal, florbal, basketbal a futsal. Menší část haly je navržena pro tři badmintonové kurty využitelné pro profesionální tréninky i veřejnost. Součástí haly je menší víceúčelový sál/klubovna, šatny s hygienickým zázemím a prostory pro skladování vybavení apod. 

V obecné rovině stavbu této multifunkční haly pro míčové sporty za Piráty podporujeme. 

>"Jestli jsem právně pochopil pana místostarostu Vítka na prezentaci haly na komisi, tak tato zveřejněná architektonická studie je podkladem k územnímu řízení, kdy stavební úřad soustředí stanoviska a vyjádření dotčených orgánů a osob, podklady k posouzení vlivu stavby na okolní prostředí a způsoby odstranění negativních vlivů dopravních, bezpečnostních atd. Následovat bude nekonečné shánění peněz, detailní projekt a stavební povolení a teprve pak se bude moci stavět. Parkování je - zdá se - navrženo před a za halou a stejně jako nyní i v prostoru mezi Žernoseckou a chodníkem," říká náš garant pro školství a sport [Pavel Franc](http://praha8.pirati.cz/lide/pavel-franc.html).

**Jak se Vám to líbí?**

Celou studii najdete na webu MČ Praha 8. [Stáhnout si jí můžete tady.](https://www.praha8.cz/file/VXQ/Studie-sportovni-haly-Jana-Mahora.pdf)

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
