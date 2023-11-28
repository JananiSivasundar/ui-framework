import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import './commands';
import '@shelex/cypress-allure-plugin';
import {loginPage} from '@pages/LoginPage'

Given("A user web browser is in the consent url page", () => {
  cy.visit("https://alandsbanken-fi-sandbox.crosskey.io/oidc/auth?response_type=code%20id_token&client_id=R4AoOTu15sXmj7xvvdjxsGccSsv5RalsnSFrehwOgAI&redirect_uri=https%3A%2F%2Fsandbox.neonomics.io%2Fcallback&nonce=QPjSq7lt_8lf92cXwnNP6-ntG3U&state=AJ4wiuvsy0NfjkK7pRXNczM&response_mode=query&scope=accounts%20openid&request=eyJraWQiOiIzMjUzNzg0NTU2OTUxMjM1NDQyNTM5MTk0ODIwNDY0MDM0NjUwOTQiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJSNEFvT1R1MTVzWG1qN3h2dmRqeHNHY2NTc3Y1UmFsc25TRnJlaHdPZ0FJIiwiY2xpZW50X2lkIjoiUjRBb09UdTE1c1htajd4dnZkanhzR2NjU3N2NVJhbHNuU0ZyZWh3T2dBSSIsInJlZGlyZWN0X3VyaSI6Imh0dHBzOi8vc2FuZGJveC5uZW9ub21pY3MuaW8vY2FsbGJhY2siLCJzY29wZSI6ImFjY291bnRzIG9wZW5pZCIsInN0YXRlIjoiQUo0d2l1dnN5ME5mamtLN3BSWE5jek0iLCJub25jZSI6IlFQalNxN2x0XzhsZjkyY1h3bk5QNi1udEczVSIsIm5iZiI6MTcwMTE2OTU4MSwiZXhwIjoxNzAxMTcwNDgxLCJjbGFpbXMiOnsiaWRfdG9rZW4iOnsib3BlbmJhbmtpbmdfaW50ZW50X2lkIjp7InZhbHVlIjoidXJuOmNyb3Nza2V5OmFjY291bnQ6MDE2NzRlNTItYzU2NC00OTZkLWE3NzYtY2I1OTAyYjc1YjE0IiwiZXNzZW50aWFsIjp0cnVlfX19fQ.C52V_-ErzsDl5i9lK0UY3HOEX09zikWawmOvnpxXKlESTDR_19sUjVRLsmhfzRyaXtBtQEFp74qtlQg1c8h3zDWY0eNyYMxTyA8HHemGYTzklu5PJvNd3UB7_Qtjh097roxUEgD2sevqiPpGqDT1VckJhOYPTQLqrRgJVwrUxmWoFFv-VQ1YbCK5pT4zt70sq8SqbZxhCTD9RNWrBXiUepd-QHVEZad7KA3aQkN5yM7OzaTAKcidw663y5DktHJni9YMtLtKu4-EtRtAkMY-MG8qAEZl0crpGP7GM9AEZc4ZYDM2uBCslOq0iuVXRu93uKQX-2OxLIG09ah2MY81pw");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password);
});

