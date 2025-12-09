import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Prompts optimizados por procedimiento
const procedurePrompts: Record<string, { prompt: string; suggestedBackground: string }> = {
  // ROSTRO Y CUELLO
  'rhinoplasty': {
    prompt: 'Professional portrait photo of a beautiful woman with refined elegant nose profile, natural soft lighting, showing perfect nose contour and harmony with facial features, photorealistic, high quality medical aesthetic result, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  'facelift': {
    prompt: 'Professional portrait of an elegant mature woman in her 50s with smooth rejuvenated facial skin, natural youthful appearance, refined jawline, premium lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'home'
  },
  'blepharoplasty': {
    prompt: 'Close-up professional portrait of a woman with beautiful refreshed eyes, no eye bags, smooth eyelids, bright alert expression, natural beauty, soft lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  'otoplasty': {
    prompt: 'Professional side profile portrait of a young person with beautifully proportioned ears, natural appearance, elegant ear positioning, soft lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  'brow-lift': {
    prompt: 'Professional portrait of a woman with elegantly lifted eyebrows, open refreshed eye area, youthful forehead, natural expression, premium lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  'neck-lift': {
    prompt: 'Professional portrait of an elegant woman showing refined neck contour and jawline, smooth neck skin, youthful profile, premium lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'home'
  },
  'facial-rejuvenation': {
    prompt: 'Professional portrait of a radiant woman with glowing rejuvenated skin, youthful appearance, natural beauty, premium soft lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'medical'
  },
  
  // CONTORNO CORPORAL
  'liposuction': {
    prompt: 'Professional photo of a fit woman in elegant activewear showing toned sculpted body contour, flat stomach, defined waist, natural lighting, photorealistic, tasteful, no text no watermarks',
    suggestedBackground: 'home'
  },
  'tummy-tuck': {
    prompt: 'Professional photo of a confident woman showing flat toned abdomen, defined waist, smooth stomach contour, elegant pose, natural lighting, photorealistic, tasteful, no text no watermarks',
    suggestedBackground: 'home'
  },
  'arm-lift': {
    prompt: 'Professional photo of a woman with toned sculpted arms, smooth skin, elegant pose with arms visible, natural lighting, photorealistic, tasteful, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  'thigh-lift': {
    prompt: 'Professional photo of a woman with toned sculpted legs and thighs, smooth skin contour, elegant confident pose, natural lighting, photorealistic, tasteful, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  '360-liposuction': {
    prompt: 'Professional photo of a woman with beautifully sculpted hourglass figure, defined waist from all angles, toned body contour, elegant pose, natural lighting, photorealistic, tasteful, no text no watermarks',
    suggestedBackground: 'medical'
  },
  'back-liposuction': {
    prompt: 'Professional photo of a woman showing smooth sculpted back contour, elegant back view, toned appearance, natural lighting, photorealistic, tasteful, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  'chin-liposuction': {
    prompt: 'Professional portrait of a woman with defined jawline and chin, no double chin, elegant neck contour, refined profile, soft lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  
  // SENOS
  'breast-augmentation': {
    prompt: 'Professional tasteful photo of a confident woman in elegant dress showing natural proportionate bust, feminine silhouette, elegant pose, natural lighting, photorealistic, classy, no text no watermarks',
    suggestedBackground: 'home'
  },
  'breast-lift': {
    prompt: 'Professional tasteful photo of a confident woman in elegant top showing youthful lifted bust contour, feminine silhouette, elegant pose, natural lighting, photorealistic, classy, no text no watermarks',
    suggestedBackground: 'home'
  },
  'breast-reduction': {
    prompt: 'Professional tasteful photo of a confident woman with proportionate balanced bust, comfortable elegant posture, feminine silhouette, natural lighting, photorealistic, classy, no text no watermarks',
    suggestedBackground: 'home'
  },
  'breast-augmentation-lift': {
    prompt: 'Professional tasteful photo of a confident woman in elegant attire showing beautifully enhanced and lifted bust, youthful silhouette, elegant pose, natural lighting, photorealistic, classy, no text no watermarks',
    suggestedBackground: 'medical'
  },
  
  // GLÚTEOS
  'bbl': {
    prompt: 'Professional tasteful photo of a confident woman showing beautifully sculpted rounded buttocks, hourglass figure, elegant pose, natural lighting, photorealistic, classy, no text no watermarks',
    suggestedBackground: 'home'
  },
  'gluteal-implants': {
    prompt: 'Professional tasteful photo of a confident woman showing enhanced rounded buttocks silhouette, elegant figure, confident pose, natural lighting, photorealistic, classy, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  
  // COMBINADOS
  'mommy-makeover': {
    prompt: 'Professional photo of a radiant confident mother with restored toned body, flat stomach, youthful figure, happy confident expression, elegant casual attire, warm home setting, photorealistic, no text no watermarks',
    suggestedBackground: 'home'
  },
  'full-body-makeover': {
    prompt: 'Professional photo of a transformed confident woman with sculpted harmonious body proportions, elegant figure, radiant appearance, premium medical spa setting, photorealistic, no text no watermarks',
    suggestedBackground: 'medical'
  },
  'post-weight-loss': {
    prompt: 'Professional photo of a proud confident woman showing transformed toned body after weight loss, smooth skin contour, triumphant confident pose, inspirational, photorealistic, no text no watermarks',
    suggestedBackground: 'home'
  },
  
  // ESPECIALIZADOS
  'gynecomastia': {
    prompt: 'Professional photo of a fit confident man with flat masculine chest contour, athletic build, confident pose, natural lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'unicolor'
  },
  'scar-revision': {
    prompt: 'Close-up professional photo showing smooth healed skin, flawless skin texture, natural skin tone, soft medical lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'medical'
  },
  'labiaplasty': {
    prompt: 'Professional tasteful portrait of a confident relaxed woman in spa setting, comfortable serene expression, wellness atmosphere, soft lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'medical'
  },
  'fat-transfer-face': {
    prompt: 'Professional portrait of a woman with youthful volumized facial features, plump cheeks, smooth skin, natural rejuvenated appearance, soft lighting, photorealistic, no text no watermarks',
    suggestedBackground: 'unicolor'
  }
};

const backgroundPrompts: Record<string, string> = {
  'unicolor': 'clean minimal soft cream or light gray gradient background, studio lighting',
  'home': 'elegant modern luxury home interior background, warm natural lighting, tasteful decor',
  'medical': 'premium modern medical clinic or spa environment, professional clean aesthetic, soft ambient lighting, high-end medical equipment visible'
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

    const fullPrompt = `${basePrompt}, ${backgroundPrompt}, ultra high resolution, professional photography, 16:9 aspect ratio`;

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

    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    
    if (!imageUrl) {
      console.error('No image in response:', JSON.stringify(data));
      throw new Error('No image generated in response');
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
