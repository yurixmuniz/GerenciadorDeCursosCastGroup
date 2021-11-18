using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GerenciadorDeCursos.Models
{
    public class Log
    {
        public int LogId { get; set; }
        public string Alteracao { get; set; }
        public int UsuarioId { get; set; }
        public int CursoId { get; set; }
        public DateTime DtInclusao { get; set; }
        public DateTime DtAlteracao { get; set; }
    }
}
