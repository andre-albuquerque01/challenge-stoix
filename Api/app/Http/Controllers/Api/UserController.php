<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdatePassword;
use App\Service\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(private UserService $userService) {}

    public function login(AuthRequest $request)
    {
        return $this->userService->login($request->validated());
    }
    public function logout()
    {
        return $this->userService->logout();
    }

    public function show()
    {
        return $this->userService->show();
    }

    public function store(UserRequest $request)
    {
        return $this->userService->store($request->validated());
    }

    public function update(UserRequest $request)
    {
        return $this->userService->update($request->validated());
    }

    public function updatePassword(UserUpdatePassword $request)
    {
        return $this->userService->updatePassword($request->validated());
    }
}
