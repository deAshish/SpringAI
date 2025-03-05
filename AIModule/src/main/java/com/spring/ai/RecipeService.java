package com.spring.ai;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RecipeService {
    private final ChatModel chatModel;

    public RecipeService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String createRecipe(String ingredients,
                               String cuisine,
                               String dietaryRestrications){
        var template = """
                I want to create a recipe using the following ingredients: {ingredients}.
                The cuisine type I prefer is {cuisine}.
                And I have the following dietary restrications: {dietaryRestrications}. Please make sure to consider this restrication.
                Please provide me detailed recipe including title, list of ingredients, and cooking instructions.
                """;

        PromptTemplate promptTemplate = new PromptTemplate(template);
        Map<String, Object> params = Map.of(
                "ingredients", ingredients,
                "cuisine", cuisine,
                "dietaryRestrications", dietaryRestrications
        );

        Prompt prompt = promptTemplate.create(params);

       return chatModel.call(prompt).getResult().getOutput().getText();
    }
}
