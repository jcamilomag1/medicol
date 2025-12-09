import { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Loader2, Image, Download, RefreshCw, Check, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Procedure {
  id: string;
  name_es: string;
  name_en: string;
  category: string;
}

const procedures: Procedure[] = [
  // ROSTRO Y CUELLO
  { id: 'rhinoplasty', name_es: 'Rinoplastia', name_en: 'Rhinoplasty', category: 'face' },
  { id: 'facelift', name_es: 'Lifting Facial', name_en: 'Facelift', category: 'face' },
  { id: 'blepharoplasty', name_es: 'Blefaroplastia', name_en: 'Blepharoplasty', category: 'face' },
  { id: 'otoplasty', name_es: 'Otoplastia', name_en: 'Otoplasty', category: 'face' },
  { id: 'brow-lift', name_es: 'Elevación de Cejas', name_en: 'Brow Lift', category: 'face' },
  { id: 'neck-lift', name_es: 'Lifting de Cuello', name_en: 'Neck Lift', category: 'face' },
  { id: 'facial-rejuvenation', name_es: 'Rejuvenecimiento Facial', name_en: 'Facial Rejuvenation', category: 'face' },
  
  // CONTORNO CORPORAL
  { id: 'liposuction', name_es: 'Liposucción', name_en: 'Liposuction', category: 'body' },
  { id: 'tummy-tuck', name_es: 'Abdominoplastia', name_en: 'Tummy Tuck', category: 'body' },
  { id: 'arm-lift', name_es: 'Braquioplastia', name_en: 'Arm Lift', category: 'body' },
  { id: 'thigh-lift', name_es: 'Lifting de Muslos', name_en: 'Thigh Lift', category: 'body' },
  { id: '360-liposuction', name_es: 'Liposucción 360°', name_en: '360° Liposuction', category: 'body' },
  { id: 'back-liposuction', name_es: 'Liposucción de Espalda', name_en: 'Back Liposuction', category: 'body' },
  { id: 'chin-liposuction', name_es: 'Liposucción de Papada', name_en: 'Chin Liposuction', category: 'body' },
  
  // SENOS
  { id: 'breast-augmentation', name_es: 'Aumento de Senos', name_en: 'Breast Augmentation', category: 'breast' },
  { id: 'breast-lift', name_es: 'Levantamiento de Senos', name_en: 'Breast Lift', category: 'breast' },
  { id: 'breast-reduction', name_es: 'Reducción de Senos', name_en: 'Breast Reduction', category: 'breast' },
  { id: 'breast-augmentation-lift', name_es: 'Aumento + Levantamiento', name_en: 'Augmentation + Lift', category: 'breast' },
  
  // GLÚTEOS
  { id: 'bbl', name_es: 'BBL (Levantamiento Brasileño)', name_en: 'BBL (Brazilian Butt Lift)', category: 'buttocks' },
  { id: 'gluteal-implants', name_es: 'Implantes de Glúteos', name_en: 'Gluteal Implants', category: 'buttocks' },
  
  // COMBINADOS
  { id: 'mommy-makeover', name_es: 'Mommy Makeover', name_en: 'Mommy Makeover', category: 'combined' },
  { id: 'full-body-makeover', name_es: 'Transformación Corporal Completa', name_en: 'Full Body Makeover', category: 'combined' },
  { id: 'post-weight-loss', name_es: 'Post Pérdida de Peso', name_en: 'Post Weight Loss Surgery', category: 'combined' },
  
  // ESPECIALIZADOS
  { id: 'gynecomastia', name_es: 'Ginecomastia', name_en: 'Gynecomastia', category: 'specialized' },
  { id: 'scar-revision', name_es: 'Revisión de Cicatrices', name_en: 'Scar Revision', category: 'specialized' },
  { id: 'labiaplasty', name_es: 'Labioplastia', name_en: 'Labiaplasty', category: 'specialized' },
  { id: 'fat-transfer-face', name_es: 'Transferencia de Grasa Facial', name_en: 'Facial Fat Transfer', category: 'specialized' },
];

const backgroundOptions = [
  { value: 'unicolor', label: 'Fondo Unicolor', description: 'Fondo limpio crema o gris' },
  { value: 'home', label: 'Fondo Hogareño', description: 'Interior de hogar elegante' },
  { value: 'medical', label: 'Fondo Médico', description: 'Clínica o spa premium' },
];

const categoryLabels: Record<string, string> = {
  face: 'Rostro y Cuello',
  body: 'Contorno Corporal',
  breast: 'Senos',
  buttocks: 'Glúteos',
  combined: 'Combinados',
  specialized: 'Especializados',
};

interface GeneratedImage {
  procedureId: string;
  imageUrl: string;
  backgroundType: string;
  approved: boolean;
}

export default function ImageGeneratorPage() {
  const [selectedProcedure, setSelectedProcedure] = useState<string>('');
  const [selectedBackground, setSelectedBackground] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!selectedProcedure) {
      toast.error('Selecciona un procedimiento');
      return;
    }

    setIsGenerating(true);
    setCurrentImage(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-procedure-image', {
        body: {
          procedureId: selectedProcedure,
          backgroundType: selectedBackground || undefined,
        },
      });

      if (error) throw error;

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setCurrentImage(data.imageUrl);
      toast.success('Imagen generada exitosamente');

    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Error al generar la imagen');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApprove = () => {
    if (!currentImage || !selectedProcedure) return;

    setGeneratedImages(prev => [
      ...prev.filter(img => img.procedureId !== selectedProcedure),
      {
        procedureId: selectedProcedure,
        imageUrl: currentImage,
        backgroundType: selectedBackground || 'unicolor',
        approved: true,
      }
    ]);

    toast.success('Imagen aprobada y guardada');
    setCurrentImage(null);
    setSelectedProcedure('');
  };

  const handleDownload = () => {
    if (!currentImage) return;

    const link = document.createElement('a');
    link.href = currentImage;
    link.download = `${selectedProcedure}-procedure.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Descarga iniciada');
  };

  const getApprovedImage = (procedureId: string) => {
    return generatedImages.find(img => img.procedureId === procedureId);
  };

  const groupedProcedures = procedures.reduce((acc, proc) => {
    if (!acc[proc.category]) acc[proc.category] = [];
    acc[proc.category].push(proc);
    return acc;
  }, {} as Record<string, Procedure[]>);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Generador de Imágenes</h1>
          <p className="text-muted-foreground mt-2">
            Genera imágenes profesionales para los 27 procedimientos de cirugía plástica usando IA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel de Control */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Configuración
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Procedimiento</label>
                <Select value={selectedProcedure} onValueChange={setSelectedProcedure}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar procedimiento..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(groupedProcedures).map(([category, procs]) => (
                      <div key={category}>
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground bg-muted/50">
                          {categoryLabels[category]}
                        </div>
                        {procs.map(proc => {
                          const approved = getApprovedImage(proc.id);
                          return (
                            <SelectItem key={proc.id} value={proc.id}>
                              <div className="flex items-center gap-2">
                                {proc.name_es}
                                {approved && <Check className="h-3 w-3 text-green-500" />}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo de Fondo</label>
                <Select value={selectedBackground} onValueChange={setSelectedBackground}>
                  <SelectTrigger>
                    <SelectValue placeholder="Usar sugerido..." />
                  </SelectTrigger>
                  <SelectContent>
                    {backgroundOptions.map(bg => (
                      <SelectItem key={bg.value} value={bg.value}>
                        <div>
                          <div>{bg.label}</div>
                          <div className="text-xs text-muted-foreground">{bg.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={!selectedProcedure || isGenerating}
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Image className="mr-2 h-4 w-4" />
                    Generar Imagen
                  </>
                )}
              </Button>

              {currentImage && (
                <div className="flex gap-2">
                  <Button onClick={handleApprove} variant="default" className="flex-1">
                    <Check className="mr-2 h-4 w-4" />
                    Aprobar
                  </Button>
                  <Button onClick={handleDownload} variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar
                  </Button>
                  <Button onClick={handleGenerate} variant="ghost" size="icon" disabled={isGenerating}>
                    <RefreshCw className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preview de Imagen */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Vista Previa</CardTitle>
            </CardHeader>
            <CardContent>
              {isGenerating ? (
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                    <p className="mt-4 text-muted-foreground">Generando imagen con IA...</p>
                    <p className="text-sm text-muted-foreground">Esto puede tomar 30-60 segundos</p>
                  </div>
                </div>
              ) : currentImage ? (
                <div className="space-y-4">
                  <img 
                    src={currentImage} 
                    alt="Generated procedure image" 
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      {procedures.find(p => p.id === selectedProcedure)?.name_es}
                    </Badge>
                    <Badge variant="secondary">
                      {backgroundOptions.find(b => b.value === selectedBackground)?.label || 'Fondo sugerido'}
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Selecciona un procedimiento y genera una imagen</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Progreso General */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Progreso de Imágenes</span>
              <Badge variant="outline">
                {generatedImages.filter(i => i.approved).length} / {procedures.length} completadas
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {procedures.map(proc => {
                const approved = getApprovedImage(proc.id);
                return (
                  <div 
                    key={proc.id}
                    className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center p-2 cursor-pointer transition-all ${
                      approved 
                        ? 'border-green-500 bg-green-50' 
                        : selectedProcedure === proc.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedProcedure(proc.id)}
                  >
                    {approved ? (
                      <img 
                        src={approved.imageUrl} 
                        alt={proc.name_es}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <>
                        <AlertCircle className="h-6 w-6 text-muted-foreground mb-1" />
                        <span className="text-xs text-center text-muted-foreground line-clamp-2">
                          {proc.name_es}
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
