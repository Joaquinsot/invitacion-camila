"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Send, Users, Baby, CheckCircle2 } from "lucide-react";

// Este es el ejemplo de la base de datos que el usuario cargará
// En el futuro, esto se puede importar desde un archivo JSON generado del Excel
const guestsDatabase = [
  { id: 1, code: "1001", name: "Tomas Bueno", adults: 5, kids: 0 },
  { id: 2, code: "1002", name: "Gerardo Bueno", adults: 5, kids: 0 },
  { id: 3, code: "1003", name: "Araceli Bueno", adults: 5, kids: 0 },
  { id: 4, code: "1004", name: "Angelica Bueno", adults: 3, kids: 2 },
  { id: 5, code: "1005", name: "Rocio Hernandez", adults: 5, kids: 0 },
  { id: 6, code: "1006", name: "Salomon Bueno", adults: 3, kids: 0 },
  { id: 7, code: "1007", name: "Karen Bueno", adults: 2, kids: 2 },
  { id: 8, code: "1008", name: "Ivonne Bueno", adults: 2, kids: 2 },
  { id: 9, code: "1009", name: "Gildardo Bueno", adults: 3, kids: 0 },
  { id: 10, code: "1010", name: "Sandra Bueno", adults: 2, kids: 1 },
  { id: 11, code: "1011", name: "Manuel Bueno", adults: 2, kids: 3 },
  { id: 12, code: "1012", name: "Ana Bueno", adults: 5, kids: 1 },
  { id: 13, code: "1013", name: "Hilario Bueno", adults: 6, kids: 0 },
  { id: 14, code: "1014", name: "Leticia Jimenez", adults: 10, kids: 0 },
  { id: 15, code: "1015", name: "Julio Bueno", adults: 2, kids: 2 },
  { id: 16, code: "1016", name: "Caliman Bueno", adults: 2, kids: 0 },
  { id: 17, code: "1017", name: "Mauricio Bueno", adults: 2, kids: 2 },
  { id: 18, code: "1018", name: "Genaro Rojas", adults: 6, kids: 0 },
  { id: 19, code: "1019", name: "Leticia Rojas", adults: 6, kids: 0 },
  { id: 20, code: "1020", name: "Nestor Rojas", adults: 4, kids: 0 },
  { id: 21, code: "1021", name: "Alicia Bueno", adults: 2, kids: 0 },
  { id: 22, code: "1022", name: "Maria Calderon", adults: 2, kids: 0 },
  { id: 23, code: "1023", name: "Fabian Calderon", adults: 4, kids: 0 },
  { id: 24, code: "1024", name: "Oscar Calderon", adults: 4, kids: 0 },
  { id: 25, code: "1025", name: "Angel Villegas", adults: 4, kids: 0 },
  { id: 26, code: "1026", name: "Teresa Rojas", adults: 3, kids: 0 },
  { id: 27, code: "1027", name: "Jhoanna Villegas", adults: 3, kids: 0 },
  { id: 28, code: "1028", name: "Joyce Villegas", adults: 3, kids: 0 },
  { id: 29, code: "1029", name: "Jorge Reyes", adults: 2, kids: 0 },
  { id: 30, code: "1030", name: "Gilberto Iglesias", adults: 3, kids: 0 },
  { id: 31, code: "1031", name: "Jennifer Iglesias", adults: 2, kids: 1 },
  { id: 32, code: "1032", name: "Dante Iglesias", adults: 3, kids: 0 },
  { id: 33, code: "1033", name: "Francisco Melendes", adults: 2, kids: 0 },
  { id: 34, code: "1034", name: "Angie Melendes", adults: 2, kids: 0 },
  { id: 35, code: "1035", name: "Raymundo Villegas", adults: 4, kids: 0 },
  { id: 36, code: "1036", name: "Mitzi Villegas", adults: 2, kids: 1 },
  { id: 37, code: "1037", name: "Raymundo Villegas (2)", adults: 2, kids: 1 },
  { id: 38, code: "1038", name: "Luis Herrera", adults: 4, kids: 0 },
  { id: 39, code: "1039", name: "Jhoshuf Herrera", adults: 2, kids: 0 },
  { id: 40, code: "1040", name: "Blanca Villegas", adults: 2, kids: 0 },
  { id: 41, code: "1041", name: "Guadalupe Motolinia", adults: 3, kids: 0 },
  { id: 42, code: "1042", name: "Julia Motolinia", adults: 2, kids: 1 },
  { id: 43, code: "1043", name: "Adriana Tovar", adults: 4, kids: 1 },
  { id: 44, code: "1044", name: "Julio Calderon", adults: 5, kids: 0 },
  { id: 45, code: "1045", name: "Nemecio Osorio", adults: 3, kids: 0 },
  { id: 46, code: "1046", name: "Victor Osorio", adults: 2, kids: 2 },
  { id: 47, code: "1047", name: "Jhonathan Perez", adults: 3, kids: 2 },
  { id: 48, code: "1048", name: "Arturo Perez", adults: 2, kids: 0 },
  { id: 49, code: "1049", name: "Gabriela Perez", adults: 2, kids: 1 },
  { id: 50, code: "1050", name: "Rogelio Gonzalez", adults: 2, kids: 0 },
  { id: 51, code: "1051", name: "Cecilia Melendes", adults: 5, kids: 0 },
  { id: 52, code: "1052", name: "Miriam", adults: 1, kids: 0 },
  { id: 53, code: "1053", name: "Berenice", adults: 1, kids: 0 },
  { id: 54, code: "1054", name: "Concepcion", adults: 1, kids: 0 },
  { id: 55, code: "1055", name: "Natalia", adults: 2, kids: 0 },
  { id: 56, code: "1056", name: "Isabel", adults: 2, kids: 0 },
  { id: 57, code: "1057", name: "Beatriz", adults: 2, kids: 0 },
  { id: 58, code: "1058", name: "Maria Luisa", adults: 5, kids: 0 },
  { id: 59, code: "1059", name: "Jose Luis", adults: 2, kids: 0 },
  { id: 60, code: "1060", name: "Alejandro Ramon", adults: 2, kids: 0 },
  { id: 61, code: "1061", name: "Gerardo Beltran", adults: 2, kids: 0 },
  { id: 62, code: "1062", name: "Bertha Zarate", adults: 5, kids: 0 },
  { id: 63, code: "1063", name: "Padilla", adults: 4, kids: 0 },
  { id: 64, code: "1064", name: "Veronica", adults: 2, kids: 0 },
  { id: 65, code: "1065", name: "Janet", adults: 3, kids: 0 },
  { id: 66, code: "1066", name: "Eduardo", adults: 3, kids: 0 },
  { id: 67, code: "1067", name: "Aron Tierra", adults: 4, kids: 0 },
  { id: 68, code: "1068", name: "Natanael", adults: 3, kids: 2 },
  { id: 69, code: "1069", name: "Jaime Orea", adults: 2, kids: 1 },
  { id: 70, code: "1070", name: "Amado Perez", adults: 3, kids: 0 },
  {id: 71, code: "1071", name: "Ulises Roque", adults: 3, kids: 0 },
  { id: 72, code: "1072", name: "Sugey", adults: 2, kids: 0 },
  { id: 73, code: "1073", name: "Ruben", adults: 1, kids: 0 },
  { id: 74, code: "1074", name: "Emiliano", adults: 1, kids: 0 },
  { id: 75, code: "1075", name: "Yeshua", adults: 1, kids: 0 },
  { id: 76, code: "1076", name: "Mateo", adults: 1, kids: 0 },
  { id: 77, code: "1077", name: "Belen 1", adults: 1, kids: 0 },
  { id: 78, code: "1078", name: "Litzy", adults: 1, kids: 0 },
  { id: 79, code: "1079", name: "Belen 2", adults: 1, kids: 0 },
  { id: 80, code: "1080", name: "Santiago", adults: 1, kids: 0 },
  { id: 81, code: "1081", name: "Fanny", adults: 1, kids: 0 },
  { id: 82, code: "1082", name: "Yaretzi", adults: 1, kids: 0 },
  { id: 83, code: "1083", name: "Dirk", adults: 2, kids: 0 },
  { id: 84, code: "1084", name: "Julio", adults: 1, kids: 0 },
  { id: 85, code: "1085", name: "Alex", adults: 1, kids: 0 },
  { id: 86, code: "1086", name: "Diego", adults: 1, kids: 0 },
  { id: 87, code: "1087", name: "Dayana", adults: 1, kids: 0 },
  { id: 88, code: "1088", name: "Carla", adults: 1, kids: 0 },
  { id: 89, code: "1089", name: "Iker", adults: 1, kids: 0 },
  { id: 90, code: "1090", name: "Alexa", adults: 1, kids: 0 },
  { id: 91, code: "1091", name: "Ximena 2", adults: 1, kids: 0 },
  { id: 92, code: "1092", name: "Señora", adults: 1, kids: 0 },
  { id: 93, code: "1093", name: "Yolanda Mendoza", adults: 2, kids: 0 },
  { id: 94, code: "1094", name: "Lucia Tovar", adults: 2, kids: 0 },
  { id: 95, code: "1095", name: "Guadalupe Luna", adults: 2, kids: 0 },
  { id: 96, code: "1096", name: "Maria Eugenia", adults: 2, kids: 0 },
  { id: 97, code: "1097", name: "Paola Garzón", adults: 2, kids: 0 },
  { id: 98, code: "1098", name: "Herlinda", adults: 4, kids: 0 },
];

export function RSVPSection() {
  const [code, setCode] = useState("");
  const [selectedGuest, setSelectedGuest] = useState<typeof guestsDatabase[0] | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState(false);

  const [attendingAdults, setAttendingAdults] = useState(0);
  const [attendingKids, setAttendingKids] = useState(0);

  const handleSearch = () => {
    const guest = guestsDatabase.find(g => g.code === code);
    if (guest) {
      setSelectedGuest(guest);
      setAttendingAdults(guest.adults);
      setAttendingKids(guest.kids);
      setIsConfirmed(false);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleWhatsApp = (guest: typeof guestsDatabase[0]) => {
    const phoneNumber = "522228334453"; // Número real actualizado
    const message = `¡Hola! Confirmo la asistencia de: ${guest.name}. 
Asistiremos: ${attendingAdults} adultos y ${attendingKids} niños. 
¡Muchas gracias por la invitación!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsConfirmed(true);
  };

  const resetSearch = () => {
    setCode("");
    setSelectedGuest(null);
    setIsConfirmed(false);
    setAttendingAdults(0);
    setAttendingKids(0);
  };

  return (
    <section className="py-24 px-4 relative z-10 text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/95 p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white overflow-hidden"
      >
        {/* Decoración Floral */}
        <img 
          src="/images/flores-esquina.png" 
          alt="" 
          className="absolute -top-12 -right-12 w-48 opacity-20 rotate-45 pointer-events-none"
        />
        <img 
          src="/images/flores-esquina.png" 
          alt="" 
          className="absolute -bottom-12 -left-12 w-48 opacity-20 -rotate-[135deg] pointer-events-none"
        />

        <div className="relative z-10">
          <h2 className="font-script text-5xl md:text-6xl text-[#8bb3a4] mb-4">Confirmación</h2>
          <p className="font-serif text-gray-500 uppercase tracking-widest text-xs mb-10">Acceso con Código</p>

          <AnimatePresence mode="wait">
            {!selectedGuest ? (
              <motion.div
                key="search"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <p className="text-gray-600 font-light mb-8 italic">
                  Ingresa el código numérico de tu invitación para confirmar tu asistencia.
                </p>
                
                <div className="relative max-w-xs mx-auto">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Ej: 1014"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    className={`w-full bg-gray-50 border-2 ${error ? 'border-red-300 animate-shake' : 'border-gray-100'} rounded-2xl py-4 px-6 text-center text-2xl font-bold tracking-[0.5em] text-gray-700 focus:outline-none focus:border-[#8bb3a4] transition-all shadow-inner`}
                  />
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-[10px] uppercase font-bold mt-2"
                    >
                      Código no encontrado
                    </motion.p>
                  )}
                </div>

                <button
                  onClick={handleSearch}
                  className="bg-[#8bb3a4] text-white rounded-full px-10 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[#7aa293] transition-colors shadow-lg"
                >
                  Validar Código
                </button>

                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-8">
                  Consulta tu código en el mensaje que recibiste
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="details"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="space-y-8"
              >
                <div className="bg-[#8bb3a4]/5 rounded-[2.5rem] p-8 md:p-12 border-2 border-dashed border-[#8bb3a4]/20 relative">
                  <h3 className="font-script text-4xl text-[#8bb3a4] mb-2">¡Hola {selectedGuest.name.split(' ')[0]}!</h3>
                  <p className="font-serif text-gray-500 italic mb-8">Confirma el número de personas que asistirán:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Control Adultos */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-4 h-4 text-[#8bb3a4]" />
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Adultos</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <button 
                          onClick={() => setAttendingAdults(Math.max(0, attendingAdults - 1))}
                          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#8bb3a4] hover:text-[#8bb3a4] transition-colors"
                        >
                          -
                        </button>
                        <span className="text-3xl font-bold text-gray-800 w-8 text-center">{attendingAdults}</span>
                        <button 
                          onClick={() => setAttendingAdults(Math.min(selectedGuest.adults, attendingAdults + 1))}
                          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#8bb3a4] hover:text-[#8bb3a4] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[9px] text-gray-300 mt-2 italic">Máximo: {selectedGuest.adults}</p>
                    </div>

                    {/* Control Niños */}
                    {selectedGuest.kids > 0 && (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-3">
                          <Baby className="w-4 h-4 text-[#8bb3a4]" />
                          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Niños</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <button 
                            onClick={() => setAttendingKids(Math.max(0, attendingKids - 1))}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#8bb3a4] hover:text-[#8bb3a4] transition-colors"
                          >
                            -
                        </button>
                          <span className="text-3xl font-bold text-gray-800 w-8 text-center">{attendingKids}</span>
                          <button 
                            onClick={() => setAttendingKids(Math.min(selectedGuest.kids, attendingKids + 1))}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#8bb3a4] hover:text-[#8bb3a4] transition-colors"
                          >
                            +
                        </button>
                        </div>
                        <p className="text-[9px] text-gray-300 mt-2 italic">Máximo: {selectedGuest.kids}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => handleWhatsApp(selectedGuest)}
                      disabled={isConfirmed || (attendingAdults === 0 && attendingKids === 0)}
                      className={`inline-flex items-center justify-center gap-3 ${(isConfirmed || (attendingAdults === 0 && attendingKids === 0)) ? 'bg-gray-100 text-gray-400' : 'bg-[#25D366] hover:bg-[#128C7E] text-white shadow-[0_10px_20px_rgba(37,211,102,0.3)]'} font-medium rounded-full py-4 px-8 transition-all uppercase tracking-widest text-xs group`}
                    >
                      {isConfirmed ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          ¡Gracias por confirmar!
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          Confirmar {attendingAdults + attendingKids} personas
                        </>
                      )}
                    </button>
                    
                    <button 
                      onClick={resetSearch}
                      className="text-gray-400 text-[10px] uppercase tracking-widest hover:text-[#8bb3a4] transition-colors"
                    >
                      ← Buscar otro nombre
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
