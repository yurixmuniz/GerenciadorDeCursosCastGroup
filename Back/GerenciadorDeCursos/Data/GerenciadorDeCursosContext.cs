using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GerenciadorDeCursos.Models;

namespace GerenciadorDeCursos.Data
{
    public class GerenciadorDeCursosContext : DbContext
    {
        public GerenciadorDeCursosContext (DbContextOptions<GerenciadorDeCursosContext> options)
            : base(options)
        {
        }

        public DbSet<GerenciadorDeCursos.Models.Usuario> Usuarios { get; set; }

        public DbSet<GerenciadorDeCursos.Models.Curso> Cursos { get; set; }

        public DbSet<GerenciadorDeCursos.Models.Categoria> Categorias { get; set; }

        public DbSet<GerenciadorDeCursos.Models.Log> Logs { get; set; }
    }
}
