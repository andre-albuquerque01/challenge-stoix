<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_login()
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $response = $this->post('/api/v1/sessions', $credentials);
        $response->assertStatus(200);
    }

    public function test_login_wrong_email()
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@1231254124',
        ]);

        $credentials = [
            'email' => 'john.doe1@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $response = $this->postJson('/api/v1/sessions', $credentials);
        $response->assertStatus(401);
    }

    public function test_register()
    {
        $store = [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'password' => 'caUzinha@1857',
            'password_confirmation' => 'caUzinha@1857',
        ];

        $response = $this->postJson('/api/v1/register', $store);
        $response->assertStatus(status: 201)
            ->assertJson(['message' => 'success']);
    }

    public function test_show()
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

        $response = $this->getJson('/api/v1/me',  [
            'Authorization' => "Bearer $token",
        ]);
        $response->assertStatus(200);
        $response->assertJsonFragment([
            'email' => 'john.doe@example.com',
        ]);
    }

    public function test_update()
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
            'email' => 'john.doe2@example.com',
            'password' => 'strongPassword@1231254124',
        ];

        $response = $this->putJson('/api/v1/update',  $data, [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(201)
            ->assertJson(['message', 'success']);
    }

    public function test_update_wrong_password()
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@12312541124',
        ]);

        $credentials = [
            'email' => 'john.doe@example.com',
            'password' => 'strongPassword@12312541124',
        ];


        $loginResponse = $this->postJson('/api/v1/sessions', $credentials);

        $token = $loginResponse->json('token');

        $data = [
            'email' => 'john1.doe@example.com',
            'password' => 'strongPassword@123125411124',
        ];

        $response = $this->putJson('/api/v1/update',  $data, [
            'Authorization' => "Bearer $token",
        ]);

        $response->assertStatus(401)
            ->assertJson(['message' => 'password incorrect']);
    }

    public function test_update_password()
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
            'password_old' => 'strongPassword@1231254124',
            'password' => 'strongPassword@12312541242',
            'password_confirmation' => 'strongPassword@12312541242',
        ];

        $response = $this->putJson('/api/v1/update/password',  $data, [
            'Authorization' => "Bearer $token",
        ]);
        $response->assertStatus(201)
            ->assertJson(['message', 'success']);
    }
}
