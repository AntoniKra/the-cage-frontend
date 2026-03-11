# 🥊 Hype Cage - Frontend (React + Vite)

Kompleksowy interfejs użytkownika dedykowany platformie rankingowej dla zawodników MMA. Aplikacja łączy nowoczesny stack technologiczny z naciskiem na interaktywność i estetykę "dark mode".

---

## 🖼️ Galeria Projektu
W tej sekcji przedstawiono kluczowe elementy interfejsu:



1. Dashboard Overview (Desktop)
   
Główny widok platformy z wyeksponowanym podium oraz listą pretendentów.
<img width="2066" height="1303" alt="{0843BD5D-376F-47B5-9ACD-92CC350E42ED}" src="https://github.com/user-attachments/assets/9a8ca966-8fda-4edb-bc3c-0389309a6d8c" />


2. Champion Highlight & Podium
   
Detale karty Championa (złoty akcent) oraz unikalne skalowanie TOP 3.
<img width="1499" height="917" alt="{CD930E14-4B49-4A5D-AAA5-B0B21C50D262}" src="https://github.com/user-attachments/assets/b40af993-7ade-43ec-963f-cc40f6be0d05" />


3. Nawigacja i Kategorie Wagowe
   
Dynamiczny pasek kategorii z wizualnym feedbackiem aktywnego wyboru.
<img width="1978" height="254" alt="{3AD8BEB5-8287-47C4-A382-B6FC1CF78EBD}" src="https://github.com/user-attachments/assets/e33e7356-7000-4fc9-989d-6db3282dd681" />


4. Interakcja: Hype Action (Hover)
   
Prezentacja stanów interaktywnych przycisku "HYPE" (efekty Tailwind).
<img width="1292" height="205" alt="{3C3A0114-4D03-4985-9398-3590B6FDC216}" src="https://github.com/user-attachments/assets/16ce7395-11f0-40bf-9541-064b8c097138" />


5. Formularz Propozycji (Modal)
   
Widok zaawansowanego modala do zgłaszania nowych zawodników.
<img width="1012" height="937" alt="{C1B390F7-BD47-41E5-B4DD-651B7CA1DF6D}" src="https://github.com/user-attachments/assets/78203614-8878-4573-9ada-07db3d21a3ce" />


6. Walidacja Formularza
   
Feedback dla użytkownika w przypadku błędnego wypełnienia pól.
<img width="720" height="798" alt="{30FD5ADC-19C4-4B51-8ED7-3EB6D7A01800}" src="https://github.com/user-attachments/assets/cf0e811d-b3dc-4001-a361-ae7e1a477abb" />
<img width="840" height="811" alt="{BE892A16-16AF-4AD8-98DF-65E11F7FD4F2}" src="https://github.com/user-attachments/assets/3080e340-be84-4125-bcab-de9e03259530" />



7. Success Feedback
   
Potwierdzenie udanego przesłania danych do API.
<img width="649" height="200" alt="{6EF85E46-9E53-4F25-988F-10CDB38BE3D9}" src="https://github.com/user-attachments/assets/fb53a410-09e2-4264-b135-a50d4395c48a" />


8. Optymalizacja Mobilna (RWD)
   
Widok rankingu dostosowany do ekranów smartfonów (układ kolumnowy).
<img width="431" height="930" alt="{77FE5852-AB44-487F-B9F1-47A9B74A1FBF}" src="https://github.com/user-attachments/assets/f98bc858-59c3-4171-b022-4cce1cb4ab5b" />


9. Mobile Sidebar (Drawer)
   
Intuicyjne menu boczne dostępne wyłącznie na urządzeniach mobilnych.
<img width="424" height="926" alt="{66B64827-9958-4568-9A50-C1DAE3FC48D3}" src="https://github.com/user-attachments/assets/e4eb466c-43cd-47f6-bf38-10364da90631" />


10. Struktura Projektu (Frontend)
   
Przejrzysta organizacja plików i komponentów wewnątrz folderu src.
<img width="293" height="776" alt="{4F8FD808-0044-4BC5-9503-43FA76A3A7D5}" src="https://github.com/user-attachments/assets/3d18bc97-c50a-45ee-9983-b2129f32304e" />




---


## ✨ Kluczowe Funkcjonalności

* **Dynamiczny Silnik Rankingowy**: Automatyczne renderowanie zawodników na podstawie kategorii wagowych pobieranych z API.
* **System Podium (Top 3)**: Specjalna prezentacja Championa oraz dwóch głównych pretendentów z unikalnym stylowaniem kart.
* **Głosowanie Hype Score**: Integracja z backendem pozwalająca na natychmiastową aktualizację punktacji popularności.
* **W pełni Responsywny Design (RWD)**: Interfejs zoptymalizowany pod urządzenia mobilne z intuicyjnym menu bocznym (Sidebar).
* **Architektura Komponentowa**: Pełna refaktoryzacja kodu w celu zapewnienia czytelności i łatwego utrzymania.
* **System Propozycji Zawodników**: Zaawansowany moduł zgłoszeniowy (Modal) z pełną walidacją pól i obsługą przesyłania danych do bazy.
---

## 🚀 Plan Rozwoju (Roadmap)

Projekt jest stale rozwijany. Planowane wdrożenia obejmują:
1.  **Szczegółowa Karta Zawodnika**: Rozbudowany profil wyświetlany po kliknięciu w kartę lub wiersz zawodnika (statystyki, ostatnie walki).
2.  **System Autoryzacji**: Wprowadzenie kont użytkowników w celu personalizacji i zabezpieczenia akcji (np. limit głosów Hype).
3.  **Animacje UI**: Dodanie płynnych przejść przy zmianie kategorii wagowych oraz efektów wejścia elementów podium.


## 📦 Instalacja i Uruchomienie
> 📌 **Wymagania wstępne:** Upewnij się, że posiadasz zainstalowane środowisko **Node.js w wersji minimum 24.12**.

1.  Sklonuj repozytorium i wejdź do folderu:`git clone https://github.com/AntoniKra/the-cage-frontend`
2. Zainstaluj zależności: `npm install`
3. Konfiguracja API:
> ⚠️ **Uwaga dotycząca bezpieczeństwa:** W środowisku produkcyjnym adres URL serwera API bezwzględnie powinien być przechowywany w pliku `.env`. Na potrzeby prostszej       konfiguracji w aktualnej wersji deweloperskiej, adres API został zahardcodowany bezpośrednio w kodzie aplikacji. 
    
   Przed uruchomieniem upewnij się, że adres API w kodzie odpowiada adresowi, pod którym działa Twój lokalny serwer Laravel (domyślnie `http://localhost:8000`).
   
4. Uruchom serwer deweloperski: `npm run dev`
5. Build produkcyjny: `npm run build`
Otwórz przeglądarkę pod adresem: `http://localhost:5173`

---

## 🛠️ Stack Techniczny

* **Core**: [React 18.3.1](https://reactjs.org/) – biblioteka do budowy interfejsów.
* **Build Tool**: [Vite 6.0.5](https://vitejs.dev/) – ultraszybkie środowisko deweloperskie.
* **Stylizacja**: [Tailwind CSS 4.0](https://tailwindcss.com/) – framework CSS typu utility-first.
* **Język**: [TypeScript](https://www.typescriptlang.org/) – zapewniający statyczne typowanie i bezpieczeństwo kodu.
* **K
