import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Download, Loader2 } from 'lucide-react';

const DENTAL_IMAGE_PROMPTS: Record<string, string> = {
  'smile-design': 'Professional dental photography showing a beautiful smile design consultation with digital screen displaying 3D smile simulation, modern dental office background, clean medical aesthetic, soft lighting, high quality, 16:9 aspect ratio',
  
  'upper-arch-design': 'Close-up professional dental photo of upper dental arch showing perfect teeth alignment, 3D digital planning overlay, modern dental technology, clean white background, medical precision, 16:9 aspect ratio',
  
  'micro-design': 'Macro dental photography showing precise micro dental work with dental tools, focus on tooth detail, professional lighting, clinical setting, high precision instruments visible, 16:9 aspect ratio',
  
  'small-resin-repair': 'Professional dental photo of composite resin filling being applied to tooth, dental instruments visible, close-up macro shot, clean clinical environment, natural tooth color matching, 16:9 aspect ratio',
  
  'complete-veneer': 'Before and after dental veneer comparison, beautiful white porcelain veneers, professional dental photography, smile transformation, clean modern aesthetic, 16:9 aspect ratio',
  
  'laser-whitening': 'Professional teeth whitening procedure with blue LED laser light on teeth, protective gear, modern dental equipment, clean bright lighting, professional medical setting, 16:9 aspect ratio',
  
  'custom-whitening-trays': 'Custom dental whitening trays with whitening gel syringes, professional product photography, clean white background, organized presentation, medical grade materials, 16:9 aspect ratio',
  
  'protective-guard': 'Professional dental mouth guard for sports, transparent protective guard on white background, medical grade material, clean product photography, 16:9 aspect ratio',
  
  'botox-bruxism': 'Medical professional administering botox injection for TMJ treatment, professional medical photography, clinical setting, facial area focus, modern medical aesthetic, 16:9 aspect ratio',
  
  'orthodontic-setup': 'Orthodontic consultation with 3D digital teeth scan displayed on monitor, professional dental office, modern technology, patient consultation setup, 16:9 aspect ratio',
  
  'single-root-canal': 'Dental x-ray showing single root canal procedure, tooth anatomy visible, professional medical imaging, clean clinical presentation, 16:9 aspect ratio',
  
  'multi-root-canal': 'Dental x-ray of molar showing multiple root canals, professional endodontic imaging, tooth anatomy detail, medical precision, 16:9 aspect ratio',
  
  'basic-denture': 'Full set of removable dental dentures on white background, professional dental product photography, realistic appearance, clean presentation, 16:9 aspect ratio',
  
  'high-impact-denture': 'Premium quality full dentures with natural-looking teeth, professional dental photography, high-end materials visible, superior aesthetic quality, 16:9 aspect ratio',
  
  'dental-implants': '3D medical illustration of titanium dental implant in jawbone, cross-section view showing implant, abutment and crown, professional medical graphics, clean design, 16:9 aspect ratio',
  
  'dental-crowns': 'Dental crown restoration on model tooth, porcelain-fused-to-metal crown, professional dental photography, clinical setting, natural tooth color, 16:9 aspect ratio',
  
  'zirconia-crown': 'Premium white zirconia dental crown, metal-free restoration, professional product photography on white background, translucent quality visible, modern material, 16:9 aspect ratio',
  
  'inlay-onlay': 'Ceramic dental inlay/onlay restoration on molar tooth, partial coverage restoration, professional dental photography, precise fit visible, natural aesthetics, 16:9 aspect ratio',
  
  'temporary-crown': 'Temporary acrylic dental crown on tooth model, provisional restoration, professional dental photography, clinical setting, 16:9 aspect ratio',
  
  'post-and-core': 'Dental post and core buildup on tooth, fiber post visible inside root canal, professional dental photography, restorative procedure, 16:9 aspect ratio',
  
  'night-guard': 'Custom night guard for bruxism on white background, rigid clear dental guard, professional product photography, medical grade material, 16:9 aspect ratio',
  
  'ceramic-veneer': 'Ultra-thin ceramic dental veneers (E-max), professional product photography showing translucency, multiple veneers displayed, premium quality visible, 16:9 aspect ratio',
  
  'professional-cleaning': 'Dental hygienist performing professional teeth cleaning with ultrasonic scaler, patient in dental chair, modern equipment, clean clinical environment, 16:9 aspect ratio',
  
  'deep-scaling': 'Periodontal deep cleaning procedure, dental instruments for scaling and root planing, professional clinical photography, periodontal treatment focus, 16:9 aspect ratio'
};

export const DentalImageGenerator = () => {
  const [progress, setProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateAllImages = async () => {
    setIsGenerating(true);
    setGeneratedImages({});
    setProgress(0);
    
    const total = Object.keys(DENTAL_IMAGE_PROMPTS).length;
    let completed = 0;

    for (const [serviceId, prompt] of Object.entries(DENTAL_IMAGE_PROMPTS)) {
      try {
        setCurrentImage(`Generando: ${serviceId}`);
        
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-dental-image`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`
            },
            body: JSON.stringify({ prompt })
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to generate image');
        }

        const data = await response.json();
        
        if (!data.imageUrl) {
          throw new Error('No image URL in response');
        }

        setGeneratedImages(prev => ({ ...prev, [serviceId]: data.imageUrl }));
        
        completed++;
        setProgress((completed / total) * 100);

        console.log(`✅ Generated ${completed}/${total}: ${serviceId}`);

        // Wait 2 seconds between requests to avoid rate limiting
        if (completed < total) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } catch (error) {
        console.error(`Error generating ${serviceId}:`, error);
        toast({
          title: "Error",
          description: `No se pudo generar la imagen: ${serviceId}`,
          variant: "destructive"
        });
      }
    }

    setIsGenerating(false);
    setCurrentImage('¡Completado!');
    
    toast({
      title: "Éxito",
      description: `Se generaron ${Object.keys(generatedImages).length} de ${total} imágenes`,
    });
  };

  const downloadAllImages = () => {
    Object.entries(generatedImages).forEach(([serviceId, imageUrl]) => {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `${serviceId}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
    
    toast({
      title: "Descargando",
      description: `Descargando ${Object.keys(generatedImages).length} imágenes...`,
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Generador de Imágenes Dentales</h1>
        <p className="text-muted-foreground mb-8">
          Genera las 24 imágenes profesionales para los procedimientos dentales usando IA
        </p>
        
        <div className="space-y-6">
          <Button 
            onClick={generateAllImages} 
            disabled={isGenerating}
            className="w-full h-14 text-lg"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generando...
              </>
            ) : (
              'Generar Todas las Imágenes (24)'
            )}
          </Button>

          {isGenerating && (
            <div className="space-y-3">
              <Progress value={progress} className="h-3" />
              <div className="flex items-center justify-between text-sm">
                <p className="text-muted-foreground">{currentImage}</p>
                <p className="font-semibold">{Math.round(progress)}%</p>
              </div>
            </div>
          )}

          {Object.keys(generatedImages).length > 0 && (
            <>
              <Button 
                onClick={downloadAllImages} 
                variant="outline" 
                className="w-full h-12"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar Todas las Imágenes ({Object.keys(generatedImages).length})
              </Button>

              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Imágenes Generadas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Object.entries(generatedImages).map(([serviceId, imageUrl]) => (
                    <div key={serviceId} className="space-y-2 border rounded-lg p-2 hover:shadow-md transition-shadow">
                      <img 
                        src={imageUrl} 
                        alt={serviceId}
                        className="w-full h-32 object-cover rounded"
                      />
                      <p className="text-xs font-medium truncate px-1">{serviceId}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">📋 Instrucciones:</h3>
          <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
            <li>Click en "Generar Todas las Imágenes" para comenzar</li>
            <li>Espera ~5-8 minutos mientras se generan las 24 imágenes</li>
            <li>Click en "Descargar Todas las Imágenes"</li>
            <li>Guarda las imágenes en <code className="bg-background px-1 rounded">src/assets/dental/treatments/</code></li>
            <li>Actualiza las rutas en <code className="bg-background px-1 rounded">dental-services.ts</code></li>
          </ol>
        </div>
      </Card>
    </div>
  );
};
