package com.spring.ai;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/ai")
public class GenerativeAIController {
    private final ChatService chatService;
    private final ImageService imageService;
    private final RecipeService recipeService;

    public GenerativeAIController(ChatService chatService, ImageService imageService, RecipeService recipeService) {
        this.chatService = chatService;
        this.imageService =imageService;
        this.recipeService=recipeService;
    }

    @GetMapping("/ask")
    public String getResponseOptions(@RequestParam String prompt){
        return  chatService.getResponseOptions(prompt);
    }

//    @GetMapping("/generate-image")
//    public void generateImage(HttpServletResponse response, @RequestParam String prompt) throws IOException {
//        ImageResponse imageResponse = imageService.generateImage(prompt);
//        String imageUrl = imageResponse.getResult().getOutput().getUrl();
//         response.sendRedirect(imageUrl);
//    }

    @GetMapping("/generate-image")
    public List<String> generateImage(HttpServletResponse response, @RequestParam String prompt,
                                      @RequestParam(defaultValue="hd") String quality,
                                      @RequestParam(defaultValue="1") int n,
                                      @RequestParam(defaultValue="1024") int height,
                                      @RequestParam(defaultValue="1024") int width) throws IOException {
        ImageResponse imageResponse = imageService.generateImage(prompt, quality, n, height, width);

        //use of stream to get multiple image url
        List<String> imageUrl = imageResponse.getResults().stream()
                .map(result -> result.getOutput().getUrl()).toList();

        return imageUrl;
    }

    @GetMapping("/generate-recipe")
    public String recipeCreater(@RequestParam String ingredients,
                                 @RequestParam(defaultValue = "any") String cuisine,
                                 @RequestParam(defaultValue = "") String dietaryRestrications){

        return recipeService.createRecipe(ingredients, cuisine, dietaryRestrications);
    }
}
