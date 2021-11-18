using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GerenciadorDeCursos.Models
{
    public class Curso
    {
        [Key]
        public int CursoId { get; set; }

        [Required]
        [StringLength(40, MinimumLength = 1)]
        [Display(Name = "nome entre 1 e 40 caracteres")]
        public string Nome { get; set; }

        [Required]
        [StringLength(150, MinimumLength = 1)]
        [Display(Name = "Dê uma breve descrição sobre o curso.")]
        public string Descricao { get; set; }

        [Required]
        [DisplayFormat(DataFormatString = "dd-MM-yyyy")]
        [Display(Name = "dd/mm/yyyy")]
        public DateTime DtInicio { get; set; }

        [Required]
        [DisplayFormat(DataFormatString = "dd-MM-yyyy")]
        [Display(Name = "dd/mm/yyyy")]
        public DateTime DtTermino { get; set; }

        public int QtdAlunos { get; set; }

        [Required]
        public int CategoriaId { get; set; }

    }
}
