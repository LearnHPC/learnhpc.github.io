# European Environment for Scientific Software Installations

The European Environment for Scientific Software Installations
([EESSI](https://www.eessi-hpc.org/), pronounced "easy") is a collaboration between a number of
[academic and industrial partners in the HPC community](https://eessi.github.io/docs/partners/).
Through the EESSI project, they want to set up a shared stack of scientific software installations
to avoid not only duplicate work across HPC sites but also the execution of sub-optimal
applications on HPC resources.

They want to focus not only on the performance of the software, but also on automating the workflow
for maintaining the software stack, thoroughly testing the installations, and collaborating efficiently.

For end users, they want to provide a uniform user experience with respect to available scientific
software, regardless of which system they use. The software stack is intended to work on laptops,
personal workstations, HPC clusters and in the cloud, which means we will need to support different
CPUs, networks, GPUs, and so on. We intend to make this work for any Linux distribution, and a
wide variety of CPU architectures (Intel, AMD, ARM, POWER, RISC-V).

## Magic Castle

[Magic Castle](https://github.com/ComputeCanada/magic_castle) is software project from
[ComputeCanada](https://www.computecanada.ca/) that recreates the HPC cluster experience in public
clouds *including a full software stack*. EESSI will integrate this project so that the EESSI
scientific software stack can be available through this approach.
