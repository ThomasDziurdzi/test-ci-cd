import { test, expect } from '@playwright/test';

test.describe('Application de Test', () => {
  test.beforeEach(async ({ page }) => {
    // Va sur l'app avant chaque test
    await page.goto('http://localhost:5173');
  });

  test('devrait afficher le titre principal', async ({ page }) => {
    // Vérifie que le titre est présent
    await expect(
      page.getByRole('heading', { name: 'Application de Test Playwright' })
    ).toBeVisible();
  });

  test('devrait incrémenter le compteur', async ({ page }) => {
    // Vérifie la valeur initiale
    await expect(page.getByTestId('counter-value')).toHaveText('Compteur: 0');

    // Clique sur "Incrémenter"
    await page.getByRole('button', { name: 'Incrémenter' }).click();

    // Vérifie que ça a changé
    await expect(page.getByTestId('counter-value')).toHaveText('Compteur: 1');

    // Clique encore 2 fois
    await page.getByRole('button', { name: 'Incrémenter' }).click();
    await page.getByRole('button', { name: 'Incrémenter' }).click();

    // Vérifie le résultat final
    await expect(page.getByTestId('counter-value')).toHaveText('Compteur: 3');
  });

  test('devrait décrémenter le compteur', async ({ page }) => {
    await page.getByRole('button', { name: 'Décrémenter' }).click();
    await expect(page.getByTestId('counter-value')).toHaveText('Compteur: -1');
  });

  test('devrait réinitialiser le compteur', async ({ page }) => {
    // Incrémente plusieurs fois
    await page.getByRole('button', { name: 'Incrémenter' }).click();
    await page.getByRole('button', { name: 'Incrémenter' }).click();
    await page.getByRole('button', { name: 'Incrémenter' }).click();

    // Réinitialise
    await page.getByRole('button', { name: 'Réinitialiser' }).click();

    // Vérifie que c'est revenu à 0
    await expect(page.getByTestId('counter-value')).toHaveText('Compteur: 0');
  });

  test('devrait soumettre le formulaire avec succès', async ({ page }) => {
    // Remplir le formulaire
    await page.getByLabel('Nom :').fill('Jean Dupont');
    await page.getByLabel('Email :').fill('jean@example.com');

    // Soumettre
    await page.getByRole('button', { name: "S'inscrire" }).click();

    // Vérifier le message de succès
    await expect(page.getByTestId('success-message')).toBeVisible();
    await expect(page.getByText('✅ Inscription réussie !')).toBeVisible();
    await expect(
      page.getByText('Bienvenue, Jean Dupont (jean@example.com)')
    ).toBeVisible();
  });

  test('devrait ajouter des tâches à la TODO list', async ({ page }) => {
    // Vérifier que la liste est vide au début
    await expect(page.getByTestId('empty-message')).toBeVisible();

    // Ajouter une première tâche
    await page.getByTestId('todo-input').fill('Faire les courses');
    await page.getByTestId('add-button').click();

    // Vérifier qu'elle apparaît
    await expect(page.getByText('Faire les courses')).toBeVisible();
    await expect(page.getByTestId('empty-message')).not.toBeVisible();

    // Ajouter une deuxième tâche
    await page.getByTestId('todo-input').fill('Apprendre Playwright');
    await page.getByTestId('add-button').click();

    // Vérifier qu'on a bien 2 tâches
    const items = page.getByRole('listitem');
    await expect(items).toHaveCount(2);
  });

  test('devrait supprimer une tâche', async ({ page }) => {
    // Ajouter 2 tâches
    await page.getByTestId('todo-input').fill('Tâche 1');
    await page.getByTestId('add-button').click();
    await page.getByTestId('todo-input').fill('Tâche 2');
    await page.getByTestId('add-button').click();

    // Vérifier qu'on a 2 tâches
    await expect(page.getByRole('listitem')).toHaveCount(2);

    // Supprimer la première
    await page.getByTestId('delete-0').click();

    // Vérifier qu'il ne reste qu'une tâche
    await expect(page.getByRole('listitem')).toHaveCount(1);
    await expect(page.getByText('Tâche 2')).toBeVisible();
    await expect(page.getByText('Tâche 1')).not.toBeVisible();
  });
});
