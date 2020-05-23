<?php

namespace App\Repository;

use App\Entity\Radicals;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Radicals|null find($id, $lockMode = null, $lockVersion = null)
 * @method Radicals|null findOneBy(array $criteria, array $orderBy = null)
 * @method Radicals[]    findAll()
 * @method Radicals[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RadicalsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Radicals::class);
    }

    // /**
    //  * @return Radicals[] Returns an array of Radicals objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Radicals
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
