<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Service\TaskService;

class TaskController extends Controller
{
    public function __construct(private TaskService $taskService) {}

    public function index()
    {
        return $this->taskService->index();
    }

    public function store(TaskRequest $request)
    {
        return $this->taskService->store($request->validated());
    }

    public function show(string $id)
    {
        return $this->taskService->show($id);
    }

    public function update(TaskRequest $request, string $id)
    {
        return $this->taskService->update($request->validated(), $id);
    }

    public function destroy(string $id)
    {
        return $this->taskService->destroy($id);
    }
}
