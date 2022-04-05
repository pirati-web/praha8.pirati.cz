---
title: Když to neudělala městská část, vyčistili jsme Rohanský ostrov od nepořádku sami
authorId: martin.sterba
image: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov4.jpg
tags: [Libeň, Karlín, Rohanský ostrov, Veřejný prostor, Životní prostředí]
fancybox:
  - name: Rohanský ostrov před a po
    img:
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov-pred1.jpg, title: Takto to na ostrově vypadalo před úklidem 1 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov-pred2.jpg, title: Takto to na ostrově vypadalo před úklidem 2 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov-po1.jpg, title: Takto to na ostrově vypadalo po úklidu 1 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov-po2.jpg, title: Takto to na ostrově vypadalo po úklidu 2 }
  - name: Fotografie z akce
    img:
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov1.jpg, title: Úklid Rohanského ostrova 1 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov2.jpg, title: Úklid Rohanského ostrova 2 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov3.jpg, title: Úklid Rohanského ostrova 3 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov5.jpg, title: Úklid Rohanského ostrova 6 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov6.jpg, title: Úklid Rohanského ostrova 7 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov7.jpg, title: Úklid Rohanského ostrova 8 }
      - { src: posts/2021-05-22-rohanskyostrov-uklid/uklid-rohanskyostrov8.jpg, title: Úklid Rohanského ostrova 9 }
---

**Dnes jsme šli uklízet Rohanský ostrov. Už jsme se totiž nemohli koukat na ten nepořádek, který tam dlouhodobě je.** Jedná o [nepořádek na pozemku, který má ve správě MČ Praha 8](https://vdp.cuzk.cz/vdp/ruian/parcely/2073551101) a je jen pár kroků od míst, kde si hrají děti.

>"Úklid Rohanu byl pro mne sledem příjemných překvapení. Jednak přišlo nečekané množství dobrovolníků, dále se zapojil i personál lodi a konečně i sami místní lidé bez domova. Celá akce se navíc nesla v příjemném a veselém duchu, takže i přes obludné množství směšného odpadu a pět vrchovatě naplněných kontejnerů na jehly a toxický odpad, odcházeli nakonec všichni s úsměvem a děkovali za fajn akci. Byla to pro mne cenná zkušenost, že s trochou snahy se dá i ze špinavé práce udělat příjemný den," říká organizátor akce a místopředseda osmičkových Pirátů [Jan Horn](https://praha8.pirati.cz/lide/jan-horn.html).

Kromě kontejnerů na toxický odpad jsme společně během několika hodin naplnili tři velké kontejnery, které nám zdarma zapůjčily Pražské služby. Stihli jsme rozdat také desítky porcí guláše lidem bez domova.

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
