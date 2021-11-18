using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GerenciadorDeCursos.Data;
using GerenciadorDeCursos.Models;
using System.Net.Http;
using System.Net;
using GerenciadorDeCursos.Controllers;

namespace GerenciadorDeCursos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CursosController : ControllerBase
    {
        private readonly GerenciadorDeCursosContext _context;

        public CursosController(GerenciadorDeCursosContext context)
        {
            _context = context;
        }

        // GET: api/Cursos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Curso>>> GetCurso()
        {
            return await _context.Cursos.ToListAsync();
        }

        // GET: api/Cursos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Curso>> GetCurso(int id)
        {
            var curso = await _context.Cursos.FindAsync(id);

            if (curso == null)
            {
                return NotFound();
            }

            return curso;
        }

        // PUT: api/Cursos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCurso(int id, Curso curso)
        {
            if (id != curso.CursoId)
            {
                return BadRequest();
            }

            _context.Entry(curso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CursoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(new {data = DateTime.Now});
        }

        // POST: api/Cursos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Curso>> PostCurso(Curso curso)
        {
            if(curso.DtInicio < DateTime.Now)
            {
                var resposta = string.Format("Impossível registrar um curso nesta data, informe uma data que seja posterior ao dia de Hoje.");
                return BadRequest(resposta);
            }
            else if (ExisteCursoMarcado(curso))
            {
                var resposta = string.Format("Já existem cursos agendados nesta data.");
                return BadRequest(resposta);
            }
             else if (CursoJaExiste(curso.Nome))
            {
                var resposta = string.Format("Este curso já está agendado.");
                return BadRequest(resposta);
            }
            else
            {
                _context.Cursos.Add(curso);
                await _context.SaveChangesAsync();
                return Ok(new {data = DateTime.Now, id = curso.CursoId});
            }
        }

        // DELETE: api/Cursos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCurso(int id)
        {  
            var curso = await _context.Cursos.FindAsync(id);
            if(curso.DtTermino < DateTime.Now && curso.DtInicio < DateTime.Now)
            {
                var resposta = string.Format("Impossível excluir este curso, ele já foi finalizado");
                return BadRequest(resposta);
            }
            else if (curso == null)
            {
                return NotFound();
            }
            else
            {
                _context.Cursos.Remove(curso);
                await _context.SaveChangesAsync();

                return Ok(new { data = DateTime.Now });
            }

        }

        private bool CursoExists(int id)
        {
            return _context.Cursos.Any(e => e.CursoId == id);
        }

        private bool ExisteCursoMarcado(Curso entrada)
        {
            foreach (Curso curso in _context.Cursos)
            {
                if (entrada.DtInicio <= curso.DtTermino && entrada.DtInicio >= curso.DtInicio || entrada.DtTermino <= curso.DtTermino && entrada.DtTermino >= curso.DtInicio)
                {
                    return true;
                }
            }
            return false;
        }
        private bool CursoJaExiste(string nome){
            foreach (Curso curso in _context.Cursos)
            {
                if (nome == curso.Nome)
                {
                    return true;
                }
            }
            return false;

        }
    }
}
