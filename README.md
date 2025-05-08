# Aplikacja E-Commerce - React Native ( APLIKACJA ZALICZENIOWA)

## Opis:

Aplikacja e-commerce stworzona z wykorzystaniem **React Native**, **TypeScript** oraz **JSONPlaceholder** jako backend, oferująca podstawowe funkcje e-commerce,
takie jak wyświetlanie produktów na głównej stronie, filtrowanie według kategorii oraz zarządzanie koszykiem. Aplikacja jest przeznaczona na urządzenia
mobilne i pozwala użytkownikowi przeglądać produkty, dodawać je do koszyka oraz wykonywać proste operacje na produktach w koszyku.

## Główne funkcjonalności:

1. **Główna strona**:
   - Wyświetlanie listy produktów z wykorzystaniem `FlatList`, z możliwością przewijania oraz ładowania danych z API.
   - Produkty są wyświetlane w układzie siatki (2 kolumny).
   - Możliwość kliknięcia na produkt, aby zobaczyć szczegóły.

![Zrzut ekranu 2025-05-08 221104](https://github.com/user-attachments/assets/6c329f63-64ff-40b6-bd4e-918db1ce5121)
![Zrzut ekranu 2025-05-08 221354](https://github.com/user-attachments/assets/5b497c22-f937-4eaf-9024-0a18dc3cdcc8)

2. **Kategorie**:
   - Użytkownik może filtrować produkty według wybranej kategorii, co umożliwia wyświetlenie tylko tych produktów, które pasują do danej kategorii.
   - Kategorie są pobierane dynamicznie z API, a filtracja produktów jest realizowana po stronie aplikacji.

![Zrzut ekranu 2025-05-08 221134](https://github.com/user-attachments/assets/311e7023-e552-4d4e-98a3-c0c62b685dca)

3. **Koszyk**:
   - Możliwość dodawania produktów do koszyka i zarządzania nim.
   - Koszyk przechowuje wybrane produkty, pozwala na usuwanie produktów oraz na wyświetlanie całkowitej wartości koszyka.
   - Prosty mechanizm zliczania ilości produktów w koszyku.
  
![Zrzut ekranu 2025-05-08 221154](https://github.com/user-attachments/assets/dfa80cb9-5ae5-45c0-94eb-73e56d8ccf29)

4. **Logowanie i rejestracja**:
   - **Logowanie**: Użytkownicy mogą zalogować się, wprowadzając swoje dane logowania (adres e-mail i hasło).
   - **Rejestracja**: Użytkownicy mogą stworzyć nowe konto, podając dane takie jak e-mail, hasło, i inne dane rejestracyjne.
   - Obsługuje proces weryfikacji i autoryzacji użytkowników.
  
![Zrzut ekranu 2025-05-08 221001](https://github.com/user-attachments/assets/2061b85b-ddfe-44d7-908c-be68607424bd)
![Zrzut ekranu 2025-05-08 221416](https://github.com/user-attachments/assets/1d9ddd6a-9dd6-4c34-b3ce-72351370c5be)

     
## Technologie:

- **React Native**: Użyto **React Native** do budowy aplikacji mobilnej, co pozwoliło na tworzenie aplikacji na platformy iOS i Android z jednej bazy kodu.
- **TypeScript**: Aplikacja została napisana w **TypeScript** dla lepszej typizacji, co umożliwia łatwiejsze utrzymanie kodu oraz zapewnia wykrywanie błędów podczas kompilacji.
- **JSONPlaceholder**: Backend do aplikacji jest symulowany za pomocą **JSONPlaceholder**, co pozwala na łatwe zarządzanie danymi o produktach, kategoriach i koszyku w formie testowych API.
- **React Navigation**: Użyto **React Navigation** do zarządzania nawigacją pomiędzy ekranami (Główna strona, Kategorie, Koszyk).
- **Axios**: Do komunikacji z API wykorzystano bibliotekę **Axios**, która ułatwia wysyłanie zapytań HTTP oraz obsługę odpowiedzi.
- **FlatList**: Użyto komponentu **FlatList** do wydajnego wyświetlania długich list produktów, co zapewnia lepszą wydajność aplikacji.
- **React Context API**: Stan aplikacji, taki jak dane o kategorii oraz koszyku, jest zarządzany za pomocą **React Context API**.

## Uruchamianie aplikacji

Aby uruchomić aplikację na swoim urządzeniu lub emulatorze, wykonaj poniższe kroki:

### 1. Klonowanie repozytorium

Pierwszym krokiem jest sklonowanie repozytorium na swoje lokalne środowisko:

```bash
git clone https://github.com/TwojaNazwaUzytkownika/nazwa-repozytorium.git
cd nazwa-repozytorium
```
### 2. Instalacja zależnośći:

```bash
npm install
```

### 3. Uruchomienie aplikacji:

```bash
npm start
```


