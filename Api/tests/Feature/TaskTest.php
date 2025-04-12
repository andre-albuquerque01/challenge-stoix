<?php

namespace Tests\Feature;

use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    public function test_index(): void
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');

        Task::factory()->count(3)->create();

        $response = $this->getJson('/api/v1/task', [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(200);
        $response->assertJsonCount(3, 'data');
    }

    public function test_show(): void
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');

        $task = Task::factory()->create();

        $response = $this->getJson("/api/v1/task/{$task->id}", [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(200);
    }

    public function test_show_wrong_id(): void
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');

        Task::factory()->create();

        $response = $this->getJson("/api/v1/task/121425", [
            'Authorization' => "Bearer $token",
        ]);
        $response->assertStatus(404);
    }

    public function test_store(): void
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');

        $data = [
            'title' => 'Foi',
            'description' => 'Lorem aaaaa',
            'data_start' => now(),
            'data_end' => now(),
        ];

        $response = $this->postJson("/api/v1/task", $data, [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(201)
            ->assertJson(['message' => 'success']);
    }

    public function test_update(): void
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');

        $task = Task::factory()->create();

        $data = [
            'title' => 'Foi',
            'description' => 'Brasil com Jesus',
        ];

        $response = $this->putJson("/api/v1/task/{$task->id}", $data, [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(201)
            ->assertJson(['message' => 'success']);
    }

    public function test_update_wrong_id(): void
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');

        $data = [
            'title' => 'Foi lá lá',
        ];

        $response = $this->putJson("/api/v1/task/12345678", $data, [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(404);
    }

    public function test_destroy(): void
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');

        $task = Task::factory()->create();

        $response = $this->delete("/api/v1/task/{$task->id}", [], [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(204);
    }

    public function test_destroy_wrong_id(): void
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');


        $response = $this->deleteJson("/api/v1/task/123", [], [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(404);
    }
}
