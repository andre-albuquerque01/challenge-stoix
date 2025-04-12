<?php

namespace App\Service;

use App\Exceptions\GeneralExceptionCatch;
use App\Http\Resources\TaskResource;
use App\Interface\TaskServiceInterface;
use App\Models\Task;

class TaskService implements TaskServiceInterface
{
    public function index()
    {
        try {
            return TaskResource::collection(Task::get());
        } catch (\Exception $e) {
            throw new GeneralExceptionCatch('Error: index task');
        }
    }

    public function store(array $data)
    {
        try {
            Task::create($data);
            return response()->json(['message' => 'success'], 201);
        } catch (\Exception $e) {
            throw new GeneralExceptionCatch('Error: store task');
        }
    }

    public function show(string $id)
    {
        try {
            $task = Task::where('id', $id)->first();
            if (!$task) {
                return response()->json(['message' => 'task not found'], 404);
            }
            return new TaskResource($task);
        } catch (\Exception $e) {
            throw new GeneralExceptionCatch('Error: show task');
        }
    }

    public function update(array $data, string $id)
    {
        try {
            $task = Task::where('id', $id)->first();
            if (!$task) {
                return response()->json(['message' => 'task not found'], 404);
            }

            $task->update($data);
            return response()->json(['message' => 'success'], 201);
        } catch (\Exception $e) {
            throw new GeneralExceptionCatch('Error: update task');
        }
    }

    public function destroy(string $id)
    {
        try {
            $task = Task::where('id', $id)->first();
            if (!$task) {
                return response()->json(['message' => 'task not found'], 404);
            }
            $task->delete();
            return response()->json(['message' => 'success'], 204);
        } catch (\Exception $e) {
            throw new GeneralExceptionCatch('Error: destroy task');
        }
    }
}
