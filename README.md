# Simon's Game

Egyszerű, böngészőben futó Simon-játék. A játék minden szinten egyre hosszabb
színsorozatot játszik le, amelyet a játékosnak ugyanabban a sorrendben kell
visszaadnia.

## Indítás

1. Klónozd a repozitóriumot, vagy töltsd le a projekt fájljait.
2. Nyisd meg az `index.html` fájlt egy modern böngészőben.
3. A kezdéshez nyomj meg egy billentyűt.

A projekt nem igényel buildelést vagy külön telepítést. A jQuery a Google CDN-ről
töltődik be, ezért az első indításkor internetkapcsolat szükséges.

## Játékmenet

- A játék egy színes gomb felvillantásával indul.
- Kattints a gombokra a megjelenített sorrendben.
- Sikeres kör után a sorozat egy új színnel bővül, majd az egész sorozat
  újra lejátszásra kerül.
- Hibás kattintás esetén a játék véget ér. Új játék indításához nyomj meg egy
  billentyűt.
- A gombok és a hangok lejátszás közben automatikusan jelzik az aktuális
  lépést.

## Projektfelépítés

| Fájl vagy mappa | Leírás |
| --- | --- |
| `index.html` | A játék felülete és a külső függőségek betöltése |
| `index.js` | A játék állapota, a sorozat lejátszása és a kattintások ellenőrzése |
| `styles.css` | A gombok és a játék vizuális megjelenése |
| `sounds/` | A színekhez és a hibajelzéshez tartozó hangfájlok |

## Technológiák

- HTML
- CSS
- JavaScript
- jQuery 3.7.1