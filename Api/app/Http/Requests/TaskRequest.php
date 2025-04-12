<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => 'required|string|min:3|max:120',
            'description' => 'required|string|min:3|max:255',
            'data_start' => 'required|date',
            'data_end' => 'required|date|after_or_equal:data_start',
        ];

        if ($this->method() == 'PATCH' || $this->method() == 'PUT') {
            $rules["title"] = [
                "nullable",
                "min:3",
                "max:120",
            ];
            $rules["description"] = [
                "nullable",
                "min:3",
                "max:255",
            ];
            $rules["data_start"] = [
                "nullable",
            ];
            $rules["data_end"] = [
                "nullable",
            ];
        }

        return $rules;
    }

    public function messages()
    {
        return [
            "title.required" => "O titulo é obrigatório.",
            "title.string" => "O titulo informado não é válido.",
            "title.max" => "O titulo não pode ter mais de 120 caracteres.",
            "title.min" => "O titulo deve ter pelo menos 3 caracteres.",

            "description.required" => "A descrição é obrigatório.",
            "description.string" => "A descrição informado não é válido.",
            "description.max" => "A descrição não pode ter mais de 255 caracteres.",
            "description.min" => "A descrição deve ter pelo menos 3 caracteres.",

            "data_start.required" => "A data de inicio é obrigatório.",
            "data_start.date" => "A data de inicio informado não é válido.",
            "data_start.max" => "A data de inicio não pode ter mais de 255 caracteres.",
            "data_start.min" => "A data de inicio deve ter pelo menos 3 caracteres.",

            "data_end.required" => "A data de finilização é obrigatório.",
            "data_end.date" => "A data de finilização informado não é válido.",
            "data_end.max" => "A data de finilização não pode ter mais de 255 caracteres.",
            "data_end.min" => "A data de finilização deve ter pelo menos 3 caracteres.",
            "data_end.after_or_equal" => "A data de finilização deve ser igual ou maior que de inicio.",
        ];
    }
}
