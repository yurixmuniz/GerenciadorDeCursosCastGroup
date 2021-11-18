using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GerenciadorDeCursos.Models
{
    public class Usuario
    {
        [Key]
        public int UsuarioId { get; set; }
        [Required]
        [StringLength(40, MinimumLength = 4)]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Required]
        [StringLength(10, MinimumLength =5)]
        [Display(Name = "Login")]
        public string Login { get; set; }

        [Required]
        [RegularExpression(@"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$")]
        [StringLength(12, MinimumLength = 8)]
        [Display(Name = "Senha")]
        public string Senha { get; set; }

    }
}
