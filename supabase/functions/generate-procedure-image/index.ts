import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Prompts neutrales y seguros - enfocados en bienestar y confianza
const procedurePrompts: Record<string, { prompt: string; suggestedBackground: string }> = {
  // ROSTRO Y CUELLO
  'rhinoplasty': {
    prompt: 'Professional portrait of a confident smiling woman with elegant facial features, beautiful profile view, soft natural lighting, high-end beauty photography',
    suggestedBackground: 'unicolor'
  },
  'facelift': {
    prompt: 'Professional portrait of a radiant woman in her 50s with glowing healthy skin, warm confident smile, elegant and refined appearance, soft studio lighting',
    suggestedBackground: 'home'
  },
  'blepharoplasty': {
    prompt: 'Professional beauty portrait of a woman with bright expressive eyes, refreshed alert look, natural makeup, soft lighting, wellness photography',
    suggestedBackground: 'unicolor'
  },
  'otoplasty': {
    prompt: 'Professional side profile portrait of a confident young person, elegant hairstyle, natural lighting, lifestyle photography',
    suggestedBackground: 'unicolor'
  },
  'brow-lift': {
    prompt: 'Professional portrait of a woman with open expressive eyes, relaxed happy expression, natural beauty, soft studio lighting',
    suggestedBackground: 'unicolor'
  },
  'neck-lift': {
    prompt: 'Professional portrait of an elegant woman, refined profile, graceful neck and jawline, premium lighting, beauty photography',
    suggestedBackground: 'home'
  },
  'facial-rejuvenation': {
    prompt: 'Professional portrait of a radiant woman with glowing healthy skin, natural beauty, confident smile, spa wellness atmosphere',
    suggestedBackground: 'medical'
  },
  
  // CONTORNO CORPORAL
  'liposuction': {
    prompt: 'Professional lifestyle photo of a fit confident woman in elegant athletic wear, healthy active lifestyle, bright natural lighting, wellness photography',
    suggestedBackground: 'home'
  },
  'tummy-tuck': {
    prompt: 'Professional lifestyle photo of a confident woman in elegant casual attire, healthy posture, modern home interior, natural lighting',
    suggestedBackground: 'home'
  },
  'arm-lift': {
    prompt: 'Professional lifestyle photo of a confident woman in elegant sleeveless top, healthy active appearance, natural lighting, wellness photography',
    suggestedBackground: 'unicolor'
  },
  'thigh-lift': {
    prompt: 'Professional lifestyle photo of a confident woman, healthy active lifestyle, elegant casual wear, bright natural lighting',
    suggestedBackground: 'unicolor'
  },
  '360-liposuction': {
    prompt: 'Professional lifestyle photo of a confident woman with elegant posture, healthy appearance, modern wellness setting, natural lighting',
    suggestedBackground: 'medical'
  },
  'back-liposuction': {
    prompt: 'Professional lifestyle photo from behind of a woman in elegant attire, confident posture, modern setting, soft lighting',
    suggestedBackground: 'unicolor'
  },
  'chin-liposuction': {
    prompt: 'Professional portrait of a confident person with refined profile and jawline, elegant appearance, soft studio lighting',
    suggestedBackground: 'unicolor'
  },
  
  // SENOS
  'breast-augmentation': {
    prompt: 'Professional portrait of a confident elegant woman in sophisticated dress, happy smile, modern setting, soft natural lighting',
    suggestedBackground: 'home'
  },
  'breast-lift': {
    prompt: 'Professional portrait of a confident radiant woman in elegant attire, positive expression, modern interior, natural lighting',
    suggestedBackground: 'home'
  },
  'breast-reduction': {
    prompt: 'Professional portrait of a confident relaxed woman, comfortable posture, elegant casual wear, soft natural lighting',
    suggestedBackground: 'home'
  },
  'breast-augmentation-lift': {
    prompt: 'Professional portrait of a confident elegant woman, sophisticated attire, modern wellness clinic setting, soft lighting',
    suggestedBackground: 'medical'
  },
  
  // GLÚTEOS
  'bbl': {
    prompt: 'Professional lifestyle photo of a confident fit woman in elegant activewear, healthy active lifestyle, modern gym or wellness setting',
    suggestedBackground: 'home'
  },
  'gluteal-implants': {
    prompt: 'Professional lifestyle photo of a confident woman in elegant athletic wear, modern fitness setting, natural lighting',
    suggestedBackground: 'unicolor'
  },
  
  // COMBINADOS
  'mommy-makeover': {
    prompt: 'Professional portrait of a happy radiant mother, confident smile, elegant casual attire, warm home setting with soft natural lighting',
    suggestedBackground: 'home'
  },
  'full-body-makeover': {
    prompt: 'Professional portrait of a confident transformed woman, elegant attire, modern wellness spa setting, soft ambient lighting',
    suggestedBackground: 'medical'
  },
  'post-weight-loss': {
    prompt: 'Professional portrait of a proud confident person celebrating health transformation, elegant casual wear, bright inspiring setting',
    suggestedBackground: 'home'
  },
  
  // ESPECIALIZADOS
  'gynecomastia': {
    prompt: 'Professional portrait of a confident fit man in casual polo shirt, healthy athletic appearance, natural lighting, lifestyle photography',
    suggestedBackground: 'unicolor'
  },
  'scar-revision': {
    prompt: 'Close-up professional photo of smooth healthy skin texture, soft spa lighting, wellness and skincare concept',
    suggestedBackground: 'medical'
  },
  'labiaplasty': {
    prompt: 'Professional portrait of a confident relaxed woman in spa robe, serene peaceful expression, wellness spa atmosphere, soft ambient lighting',
    suggestedBackground: 'medical'
  },
  'fat-transfer-face': {
    prompt: 'Professional beauty portrait of a woman with youthful glowing skin, natural healthy appearance, soft studio lighting',
    suggestedBackground: 'unicolor'
  }
};

const backgroundPrompts: Record<string, string> = {
  'unicolor': 'clean minimal soft cream or light gray gradient studio background',
  'home': 'elegant modern luxury home interior with warm natural lighting and tasteful decor',
  'medical': 'premium modern wellness spa or medical clinic with clean professional aesthetic and soft ambient lighting'
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { procedureId, backgroundType, customPrompt } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Get the prompt for this procedure
    const procedureConfig = procedurePrompts[procedureId];
    if (!procedureConfig && !customPrompt) {
      throw new Error(`No prompt found for procedure: ${procedureId}`);
    }

    const basePrompt = customPrompt || procedureConfig.prompt;
    const bgType = backgroundType || procedureConfig?.suggestedBackground || 'unicolor';
    const backgroundPrompt = backgroundPrompts[bgType];

    const fullPrompt = `${basePrompt}, ${backgroundPrompt}, ultra high resolution, professional photography, 16:9 aspect ratio, photorealistic, no text, no watermarks, no logos`;

    console.log(`Generating image for procedure: ${procedureId}`);
    console.log(`Full prompt: ${fullPrompt}`);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-pro-image-preview',
        messages: [
          {
            role: 'user',
            content: fullPrompt
          }
        ],
        modalities: ['image', 'text']
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please wait a moment and try again.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Payment required. Please add credits to continue.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log('AI response received');

    // Check if the model refused to generate
    const textContent = data.choices?.[0]?.message?.content;
    if (textContent && textContent.includes("can't help") || textContent?.includes("cannot")) {
      console.error('Model refused to generate:', textContent);
      return new Response(JSON.stringify({ 
        error: 'The AI model could not generate this image. Try a different background type or regenerate.',
        details: textContent
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    
    if (!imageUrl) {
      console.error('No image in response:', JSON.stringify(data));
      return new Response(JSON.stringify({ 
        error: 'No image was generated. Try a different background type.',
        details: textContent || 'Unknown reason'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ 
      success: true,
      imageUrl,
      procedureId,
      backgroundType: bgType,
      prompt: fullPrompt
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error generating image:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
