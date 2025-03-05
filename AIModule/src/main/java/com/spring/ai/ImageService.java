package com.spring.ai;

import org.springframework.ai.image.ImageModel;
import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.stereotype.Service;

@Service
public class ImageService {

    private final OpenAiImageModel openAiImageModel;

    public ImageService(OpenAiImageModel openAiImageModel) {
        this.openAiImageModel = openAiImageModel;
    }

    public ImageResponse generateImage(String prompt, String quality,  int n, int height, int width ){
     return   openAiImageModel.call(
            new ImagePrompt(prompt,  OpenAiImageOptions.builder()
                    .quality(quality)
                    .model("dall-e-2")
                    .N(n)
                    .height(height)
                    .width(width).build()
        ));
    }
}
